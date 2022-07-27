# webpack開発テンプレート
webpackで開発を行うためのテンプレート  
### [ 機能 ]
* ES2015以降の構文をトランスパイル  
babel, @babel/core, @babel/preset-env  
@babel/preset-envについて : https://babeljs.io/docs/en/babel-preset-env
* スタイルシートのバンドル  
css-loader   : スタイルシートをjsで読み込む  
style-loader : \<style>要素としてページに反映させる  
sass-loader : sassコードをコンパイルし標準CSSに変換

## Requirement
devDependencies
* webpack
* webpack-cli  
#### babelを利用する場合
* @babel/core
* @babel/preset-env
* babel-loader
#### スタイルシートをバンドルする場合
* css-loader
* style-loader
* sass-loader（sassを利用する場合のみ。node-sassが必要。）  
  * node-sassはnodeのバージョンに依存するため注意  
  https://github.com/sass/node-sass
#### stylelintを利用する場合
* stylelint
* stylelint-scss
* stylelint-config-recommended-scss
* stylelint-config-recess-order (--fixでプロパティの順番をソート)

## Installation
package.jsonが存在するディレクトリで以下のコマンドを実行する。
```
npm install
```
これでpackage.jsonにある、dependencies/devDependenciesに記載されているパッケージがすべてインストールされる。

## Usage
#### webpack.dev.jsの設定に従い、ビルドする。（開発用）
```
npm run build
```
#### webpack.dev.jsの設定に従い、再ビルドする。（開発用）
エントリーポイント(src/index.js)の依存関係ファイルを監視して差分ビルドされる。
```
npm run build:watch
```
#### webpack.prod.jsの設定に従い、ビルドする。（本番用）
```
npm run prod
```
#### stylelintによるcss/scss/sassコードチェック
```
npm run lint:css
```
#### stylelintによるcss/scss/sassコードチェック + 自動修正
```
npm run lint:fix
```
## Note
### webpack
* CLI option  
--watch : entry ファイルに依存するファイルをすべて監視する
* webpack.config.js  
  * mode  
  development / production（規定値）/ none  
  
    | モード             | development | production |
    | ------------------ | ----------- | ---------- |
    | サイズ             | 大          | 小         |
    | ビルド時間         | ○           | △          |
    | 実行パフォーマンス | △           | ○          |
    | ソースマップ       | ○           | ✖          |
    https://webpack.js.org/configuration/mode/

  * entry  
  エントリーポイントの設定  
  複数のエントリーポイントを指定する場合、以下のようにオブジェクトで指定する  
    ```js
    entry: {
        main: './src/main.js',
        sub: './src/sub.js'
    },
    output: {
        filename: '[name].budle.js', // [name]にはentryオブジェクトのキー名が入る
        path: __dirname + '/dist'
    }
    ```
  * output  
  出力設定
  * devtool  
  eval-source-map がおすすめ。ソースマップが正確になる。  
  https://webpack.js.org/configuration/devtool/
  * module  
  モジュールに関する設定。  
  rules[]内に各ローダーの設定を記載する。ローダーは指定された逆順で実行される。  
  test : /正規表現/ のように正規表現リテラルで書くのがベター。  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;クォーテーションで囲んで文字列に指定するには絶対パスで書かないといけない。  
  use  : ローダーの指定

### package.json の enginesプロパティについて
本パッケージを利用するときのnodeのバージョンを明記できる。  
`npm install`時にnodeバージョンの警告を起こすには、`--engine-strict`オプションが必要となる。  
.npmrcに以下の設定をしておくとオプションは必要ない。
```
engine-strict=true
```

## Author
Kohei Sato