// 設定ファイルの外枠
module.exports = {
  // モード
  mode: 'development',
  // ソースマップの設定、生成方法の制御
  devtool: 'eval-source-map',
  // エントリーポイント
  entry: './src/index.js',
  // 出力設定
  output: {
    // 出力先フォルダー
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
      //   test: /.css$/,
      //   use: [
      //     // css-loaderで.cssファイルをモジュール化した後、style-loaderでページに組み込まれる
      //     'style-loader',
      //     'css-loader',
      //     // 'sass-loader' // Sassを使用する場合
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
  }
};