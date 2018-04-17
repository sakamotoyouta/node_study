const express = require('express');
const http = require('http');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const Message = require('./schema/Message');

const app = express();

mongoose.connect('mongodb://localhost:27017/chatapp', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('successfully connected to MongoDB.');
  }
});

// app.use(function(req, res, next) {
//     return res.send('Hello World !');
// });

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/hoge', (req, res) => res.send('Hoge'));

app.use(bodyparser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  Message.find({}, (err, msgs) => {
    if (err) throw err;
    res.render('index', { messages: msgs });
  });
});
app.get('/update', (req, res) => res.render('update'));

app.post('/update', fileUpload(), (req, res) => {
  if (req.files && req.files.image) {
    req.files.image.mv(`./image/${req.files.image.name}`, (err) => {
      if (err) throw err;
      const newMessage = new Message({
        username: req.body.username,
        message: req.body.message,
        image_path: `/image/${req.files.image.name}`,
      });
      newMessage.save((saveErr) => {
        if (saveErr) throw saveErr;
        return res.redirect('/');
      });
    });
  } else {
    const newMessage = new Message({
      username: req.body.username,
      message: req.body.message,
    });
    newMessage.save((saveErr) => {
      if (saveErr) throw saveErr;
      return res.redirect('/');
    });
  }
});

app.use('/image', express.static(path.join(__dirname, 'image')));

const server = http.createServer(app);
server.listen('3000');
console.log('hey! input blowser localhost:3000');
