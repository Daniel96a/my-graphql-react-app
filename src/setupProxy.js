const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
      router: () => "http://localhost:8080",
    }),
  );
};
