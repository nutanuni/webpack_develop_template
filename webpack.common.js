// const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // エントリーポイント
  entry: './src/index.js',
  // 出力設定
  output: {
    // 出力先フォルダ
    path: `${__dirname}/dist`,
    // 出力先のファイル名
    filename: 'main.js'
  },
  // モジュールに関する設定
  module: {
    rules: [
      ////////// フォーマット
      // {
      //   // ローダーを適用するファイル
      //   test: /.css$/,
      //   // 適用するローダーの指定
      //   use: []
      // },

      ////////// css バンドル用
      // {
      //   test: /\.css$/,
      //   use: [
      //     // css-loaderで.cssファイルをモジュール化した後、style-loaderでページに組み込まれる
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },

      ////////// scss バンドル用
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },

      /////////// ES2015構文使用する用
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { 'modules': false }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }

    ]
  },
  // プラグインに関する設定
  plugins: [
    // stylelint によるコード修正 + プロパティ自動ソート
    // new StyleLintWebpackPlugin({
    //   configFile: './.stylelintrc.json',
    //   fix: true
    // })
  ]
};