module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.css$/, // 以匹配loaders所处理文件的拓展名的正则表达式
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};
// 备注
// 1、webpack loader的执行顺序是从右到左
// 2、css-loader: 加载.css文件，能够使用类似@import和url（...）的方法实现require的功能
// 3、style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面（最终解析完的css代码）
