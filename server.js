/**
 * @Author: HaoJie
 * @Date: 2023-01-05 15:31:08
 * @LastEditTime: 2023-01-06 17:03:33
 * @LastEditors: HaoJie
 * @FilePath: \1111\server.js
 */
const app = require("./express");

require("./swaggerUI");

require("./api/index");

app.listen(3000, () => {
  console.log("示例应用正在监听 3000 端口 !");
});
