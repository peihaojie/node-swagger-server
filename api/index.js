/**
 * @Author: HaoJie
 * @Date: 2023-01-05 17:20:23
 * @LastEditTime: 2023-01-06 10:14:01
 * @LastEditors: HaoJie
 * @FilePath: \1111\api\index.js
 */
const express = require("express");
const app = express();

// /**
//  * @openapi
//  * /hello:
//  *   get:
//  *     tags:
//  *       - 测试
//  *     summary: GET 测试
//  *     description: 用于测试基础 GET 请求的接口
//  *     responses:
//  *       200:
//  *         description: 【成功】 返回 world
//  */

/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *         example: "ca"
 *         description: "谁受伤"
 *       breed:
 *         type: string
 *         example: "ca"
 *       age:
 *         type: integer
 *         example: 12
 *       sex:
 *         type: string
 *         example: "ca"
 */

/**
 * @swagger
 * /api/puppies/{id}:
 *   get:
 *     tags:
 *      - Puppies
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
