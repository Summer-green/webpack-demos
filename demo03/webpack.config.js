module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // 屏蔽不需要处理的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'] //转译ES6语法
          }
        }
      }
    ]
  }
};
// Babel：JavaScript 语法的编译器，是几个模块化的包：babel-core(核心) babel-loader babel-preset-env babel-preset-react、babel-polyfill

// 能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
// 能使用基于JavaScript进行了拓展的语言，比如React的JSX；

//babel为我们提供了一个配置项叫做persets（预设），预设就是一系列插件的集合

// 可把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中 （webpack会自动调用.babelrc里的babel配置选项）

