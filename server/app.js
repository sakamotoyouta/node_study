const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const Message = require('./schema/Message');
const User = require('./schema/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.babel');

const compiler = webpack(config);


/*
 * 使用サーバ
 */
const app = express();

/*
 * 使用DB
 */
mongoose.connect('mongodb://localhost:27017/chatapp', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('successfully connected to MongoDB.');
  }
});

/*
 * ミドルウェア
 */
app.use(express.static(`${__dirname}/public`));
app.use(session({ secret: 'HogeFuga' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/avatar', express.static(path.join(__dirname, 'avatar')));
// passport
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Incorrect Username.' });
    if (user.password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, user);
  });
}));
passport.serializeUser((user, done) => { done(null, user._id); });
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => { done(err, user); });
});
// webpack
app.use(hotMiddleware(compiler));
app.use(middleware(compiler, {
  watchOptions: {
    ignored: /node_modules/,
  },
  publicPath: config.output.publicPath,
}));

/*
 * Viewの設定
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*
 * API
 */
const jsonParser = bodyParser.json();
app.get('/postList', jsonParser, (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) throw err;
    return res.send(messages);
  });
});

const rawParser = bodyParser.raw({ extended: true, limit: '50mb' });
app.post('/postList', rawParser, (req, res) => {
  if (req.body && req.get('X-UserName') && req.get('X-Message')) {
    // fs.writeFileSync(`${__dirname}/image/testfile.jpg`, req.body);
    // req.files.image.mv(`./image/${req.files.image.name}`, (err) => {
  //   if (err) throw err;
  //   const newMessage = new Message({
  //     username: req.body.username,
  //     message: req.body.message,
  //     image_path: `/image/${req.files.image.name}`,
  //   });
  //   newMessage.save((saveErr) => {
  //     if (saveErr) throw saveErr;
  //     return res.redirect('/');
  //   });
  // });
  } else {
    // TODO：Bad Request的なメッセージを送る
    res.sendStatus(400);
  }
});


/*
 * ルーティング
 */
app.get('/');

app.get('/signin', (req, res) => res.render('signin'));
app.post('/signin', fileUpload(), (req, res) => {
  const { avatar } = req.files;
  avatar.mv(`./avatar/${avatar.name}`, (err) => {
    if (err) throw err;

    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      avatar_path: `/avatar/${avatar.name}`,
    });
    newUser.save((saveErr) => {
      if (saveErr) throw saveErr;
      return res.redirect('/');
    });
  });
});

app.get('/login', (req, res) => res.render('login'));
app.post('/login', passport.authenticate('local'), (req, res) => {
  User.findOne({ _id: req.session.passport.user }, (err, user) => {
    if (err || !user || !req.session) return res.redirect('/login');

    req.session.user = {
      username: user.username,
      avatar_path: user.avatar_path,
    };
    return res.redirect('/');
  });
});

// app.get('/update', (req, res) => res.render('update'));
// app.post('/update', fileUpload(), (req, res) => {
//   if (req.files && req.files.image) {
//     req.files.image.mv(`./image/${req.files.image.name}`, (err) => {
//       if (err) throw err;
//       const newMessage = new Message({
//         username: req.body.username,
//         message: req.body.message,
//         image_path: `/image/${req.files.image.name}`,
//       });
//       newMessage.save((saveErr) => {
//         if (saveErr) throw saveErr;
//         return res.redirect('/');
//       });
//     });
//   } else {
//     const newMessage = new Message({
//       username: req.body.username,
//       message: req.body.message,
//     });
//     newMessage.save((saveErr) => {
//       if (saveErr) throw saveErr;
//       return res.redirect('/');
//     });
//   }
// });

// 404 redirect to top page
app.get('*', (req, res) => res.sendfile(path.join(__dirname, '../public', 'index.html')));


/*
 * サーバ立ち上げ
 */
const server = http.createServer(app);
server.listen('3000');
console.log('hey! input blowser localhost:3000');
