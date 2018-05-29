# 概要
ユーザー認証付きの画像アップロードアプリです。

『JavaScriptでのWeb開発 - Node.js + Express + MongoDB + ReactでWebアプリを開発しょう』に`ES6`と`webpack`と`ESLint`と`TypeScript`と`React/Redux`を適用したものです。(2018/04/29時点では途中段階)

かなり手を加えたので元々の形はほとんど残っていないと思います。
さらに、環境周りなどは、一から私が設定しており現在も開発中なので最適化不足の箇所もあります。

# DB起動方法
sudo mongod --dbpath server/db

# サーバ起動方法 ( Expressサーバが起動します )
npm start

# TODO
- [ ] 動作させることを優先したのでリファクタリングする
- [ ] body-parserはdeprecatedなので代替方法を探す
- [ ] express-sessionはdeprecatedなので代替方法を探す
- [ ] エラーハンドリングは後回しにしている
- [ ] app.jsを適切にモジュール化する
- [ ] app.jsにtypescriptを適用する