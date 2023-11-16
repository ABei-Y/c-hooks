const merge = require('webpack-merge'); // 将根目录的webpack.common.js和当前子包的webpack配置进行merge
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'cassie-hooks.js',
    library: 'cassie-hooks',
    path: path.resolve(__dirname, './dist'),
  },
});
