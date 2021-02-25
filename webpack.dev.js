const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // モード
  mode: 'development',
  // ソースマップの設定、生成方法の制御
  devtool: 'eval-source-map'
});