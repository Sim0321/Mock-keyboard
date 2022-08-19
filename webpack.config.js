const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js", //js파일 진입점
  output: {
    filename: "bundle.js", // bundel될 파일 이름 지정
    path: path.resolve(__dirname, "./dist"), // bundle될 파일의 생성될 경로
    clean: true, // 다른 파일이 있다면 그것을 지우고 새로생성하는 속성
  }, //  ??
  devtool: "source-map", //build한 파일과 원본 파일을 서로 연결
  mode: "development", // mode는 기본으로 production, development 가 있는데 차이는 html,css,js난독화기능을 추가할지의 차이
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    watchFiles: "index.htmnl",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html",
      inject: "body",
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
};
