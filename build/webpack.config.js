const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry:"./src/index.ts",
  output:{
    filename:"main.js"
  },
  resolve:{
    extensions:[".ts",".tsx",".js"]
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  devtool:process.env.Node_ENV === 'production' ? false : "inline-source-map",
  devServer:{
    contentBase:"./dist",// 本地服务器的根目录
    stats:"errors-only",// 本地服务器控制台展示信息
    compress:false,
    host:"localhost",
    port:8888
  },
  plugins:[
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:["./dist"]
    }),
    new HtmlWebpackPlugin({
      template:"./src/template/index.html"
    })

  ]
}
