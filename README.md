<!--
 * @Author: HaoJie
 * @Date: 2023-01-06 17:07:53
 * @LastEditTime: 2023-01-06 17:39:23
 * @LastEditors: HaoJie
 * @FilePath: \node-swagger-server\readme.md
-->

# 根据 Express 注释生成 Swagger 文档

> node 版本 v16.17.0

该项目使用 swagger-ui-express 和 swagger-jsdoc 根据接口的注释来生成 Swagger 文档，使用 Webpack 打包生成含有 Swagger 的 dist 文件。

## 相关文档

- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
- [swagger-ui-dist](https://www.npmjs.com/package/swagger-ui-dist)
- [swagger-editor](https://editor.swagger.io/?_ga=2.163407102.31466322.1672904915-1762401414.1672904914)
- [swagger-docs](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)

```sh
# 安装依赖
npm install

# 启动 Express
npm run start

# 打包
npm run build

# 运行打包后的文件（需要先运行打包命令）
npm run server

# 接口文档路径
# localhost:3000/api-docs
```

## 目录结构

```sh
├─.gitignore
├─express.js  # 初始化 Express
├─openapi.json # 默认的 Swagger 配置（这里并没有任何用途，仅作参照）
├─package-lock.json
├─package.json
├─README.md
├─server.js # 运行 Express 和 Swagger
├─swagger.js # Swagger 配置
├─swaggerUI.js # 初始化 Swagger
├─webpack.config.js # webpack 打包配置
├─api
|  └index.js # 接口
```

## 注意事项

注释的缩进需严格按照 yaml 的格式来书写，否则会解析错误。
