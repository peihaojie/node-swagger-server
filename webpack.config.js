/**
 * @Author: HaoJie
 * @Date: 2023-01-06 15:00:00
 * @LastEditTime: 2023-01-06 17:05:02
 * @LastEditors: HaoJie
 * @FilePath: \1111\webpack.config.js
 */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();

module.exports = {
  entry: "./server.js",
  mode: "development",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [
        __dirname + "/dist/*.html",
        __dirname + "/dist/*.map",
        __dirname + "/dist/*.md",
        __dirname + "/dist/*.json",
        __dirname + "/dist/index.js",
        __dirname + "/dist/LICENSE",
        __dirname + "/dist/NOTICE",
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        // 拷贝swagger相关的文件
        {
          // from: __dirname + "/node_modules/swagger-ui-dist/",
          from: pathToSwaggerUi,
          to: "./",
        },
      ],
    }),
  ],
};
