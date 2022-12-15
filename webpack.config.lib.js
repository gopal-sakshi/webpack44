const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/num_to_word.js',
    output: {
        // filename: 'webpack_lib23_num2word_with_lodash.js',
        filename: 'webpack_lib23_num2word_without_lodash.js',
        path: path.resolve(__dirname, 'dist_lib'),
        
        // we need to expose exports from the entry point through output.library option.
        library: "webpackNum2Word",

        // without this block, it only with script tag... now it works in all environments
        globalObject: 'this',
        library: {
          name: 'webpackNumbers',
          type: 'umd',
        },
    },
    // externals: to separate lodash from this file
    // externals: {
    //     lodash: {
    //         commonjs: 'lodash',
    //         commonjs2: 'lodash',
    //         amd: 'lodash',
    //         root: '_',
    //     },
    // },
    module: {
        // it seems rules are also not needed... so disabling
        rules: []
    },
    plugins: [
        // we wont clean webpack, bcoz we want to see both without_lodash & with_lodash.js files
        // new CleanWebpackPlugin(),

        // we dont need to generate index.html for "webpack_lib23_num2word"; hence disabling
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     inject: true,
        //     template: path.resolve(__dirname, 'src', 'index.html'),
        // }),
    ],
    optimization: {
        // if there's only 1 output file is there... ERROR = multiple-assets-emit-to-the-same-filename, so disabling
        // splitChunks: {
        //     chunks: 'all',
        // },
    },
};