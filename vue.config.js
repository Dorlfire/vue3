// vue.config.js
module.exports = {
    // 路径
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Back/XCX/'
        : '/xcx/',
    // build输出目录
    outputDir: `dist`,
    // 静态资源目录（js, css, img）
    assetsDir: 'assets',
    devServer: {
        port: '8077', // 设置端口号
        proxy: {
            '^/An_BMD/Admin/Inven/XCX/': {
                target: 'http://127.0.0.1:28080',
                // 代理websockets
                ws: false,
                // 是否跨域，虚拟的站点需要更管origin
                changeOrigin: true
            },
        }
    }
}