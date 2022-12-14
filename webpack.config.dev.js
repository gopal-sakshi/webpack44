const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',                       // deprecated since webpack v5
        static: {
            directory: path.join(__dirname, "./dist")
        }
    },
})