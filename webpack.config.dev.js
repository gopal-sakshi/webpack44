const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');

module.exports = merge(commonConfig, {
    mode: 'development',            // bundle will not be minified
    // devtool: 'inline-source-map',                   // for generating source-maps
    devtool: 'sourcemap',                   // for generating source-maps
    
    devServer: {            // webpack-dev-server configuration
        // contentBase: './dist',                       // deprecated since webpack v5
        static: {
            directory: path.join(__dirname, "./dist")
        },
        compress: true,
        port: 9993,
        hot: true           // Since webpack-dev-server v4.0.0, Hot Module Replacement is enabled by default.
                                // or use this ====> webpack serve --hot-only
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