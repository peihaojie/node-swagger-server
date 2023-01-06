/**
 * @Author: HaoJie
 * @Date: 2023-01-06 17:02:02
 * @LastEditTime: 2023-01-06 17:04:25
 * @LastEditors: HaoJie
 * @FilePath: \1111\swaggerUI.js
 */
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");
// const swaggerDocument = require("./openapi.json");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerSpec = swaggerJSDoc(swaggerDocument);

const app = require("./express");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
