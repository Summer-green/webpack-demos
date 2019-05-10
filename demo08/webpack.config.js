var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({  // 依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
      title: 'Webpack-demos',
      filename: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'  //自动打开网页 （ 命令行不用--open ）
    })
  ]
};

//每次生成的js文件名称不同时非常有用（比如添加了hash值）