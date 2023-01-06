/**
 * @Author: HaoJie
 * @Date: 2023-01-05 15:31:26
 * @LastEditTime: 2023-01-06 09:51:01
 * @LastEditors: HaoJie
 * @FilePath: \1111\swagger.js
 */
module.exports = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    // openapi: "3.0.3",
    swagger: "2.0",
    info: {
      title: "Swagger Petstore - OpenAPI 3.0",
      description:
        "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\n_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
      termsOfService: "http://swagger.io/terms/",
      contact: {
        email: "apiteam@swagger.io",
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html",
      },
      version: "1.0.11",
    },
    schemes: ["http"],
    host: "api.example.com",
    basePath: "/v1",
  },
  explorer: true,
  customCss: ".swagger-ui .topbar { display: none }",
  // customCssUrl: "/custom.css",
  // customCssUrl: ["/custom.css", "https://example.com/other-custom.css"],
  // customJs: "/custom.js",
  // customJs: ["/custom.js", "https://example.com/other-custom.js"],
  // customJsStr: 'console.log("Hello World")',
  // customJsStr: [
  //   'console.log("Hello World")',
  //   `
  //   var x = 1
  //   console.log(x)
  //   `,
  // ],
  swaggerOptions: {
    // url: 'http://petstore.swagger.io/v2/swagger.json',
    // urls: [
    //   {
    //     url: "http://petstore.swagger.io/v2/swagger.json",
    //     name: "Spec1",
    //   },
    //   {
    //     url: "http://petstore.swagger.io/v2/swagger.json",
    //     name: "Spec2",
    //   },
    // ],
    validatorUrl: null,
  },
  apis: ["./api/index.js"],
};
