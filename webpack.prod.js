const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // モード
  mode: 'production',
  // ソースマップの設定、生成方法の制御
  devtool: 'eval'
});