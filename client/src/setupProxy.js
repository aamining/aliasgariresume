const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://commentsforali.herokuapp.com',
      changeOrigin: true,
    })
  );
};
