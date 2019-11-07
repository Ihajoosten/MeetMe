module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000/',
                ws: true,
                secure: false
            }
        }
    }
}