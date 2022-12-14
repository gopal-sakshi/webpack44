const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',                       // deprecated since webpack v5
        static: {
            directory: path.join(__dirname, "./dist")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                    // tell webpack that when it encounters .js or .jsx files to use Babel to transform the code
                }
            }
        ]
    }
})