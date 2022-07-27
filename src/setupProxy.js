const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/weather',
        createProxyMiddleware({
            target: 'https://api.openweathermap.org',
            changeOrigin: true,
            pathRewrite: {'^/api/weather': ''},
            logLevel: 'debug',
        })
    )
}