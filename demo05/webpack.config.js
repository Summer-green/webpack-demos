module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192  //小于这个值的图片以base64引用 大于的还是已路径引用 这样可一定程度上减少http请求
            }
          }
        ]
      }
    ]
  }
};

//备注
// url-loader封装了file-loader
