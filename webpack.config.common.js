const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    // 1 =========> Only 1 file
    // entry: './src/index.js',

    // 2 =========> Multiple files (both chunks may contain same loadash module) (repetetion)
    // entry: {
    //     index: './src/index.js',
    //     module1: './src/module1.js'
    // },

    // 3 =======> using entry dependencies (only single lodash module is present in final bundle)
    // entry: {
    //     index: {
    //         import: './src/index.js',
    //         dependOn: 'shared',
    //     },
    //     module1: {
    //         import: './src/module1.js',
    //         dependOn: 'shared',
    //     },
    //     shared: 'lodash',
    // },

    // 4 =======> using split chunks plugin... see optimization section, splitChunks property
    entry: {
        index: './src/index.js',
        // index: './src/indexx_without_loaders.js',
        module1: './src/module1.js'        
    },

    output: {
        // filename: 'main.js',
        filename: '[name].[contenthash].js',            // this is cache busting        
            // main.2c66xxx7e0c.js
            // contenthash = 2c66xxxx7e0c
        path: path.resolve(__dirname, 'dist'),
        clean: true,                                     // clean the dist folder everytime... use either this (or) new CleanWebpackPlugin()
        // publicPath : '/',           // used for express Server
                                        // but if u use this, you cant directly open index.html file in dist folder
                                        // as js files will be "/module1.bundle.js" & not "module1.bundle.js"
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                // include field = apply the loader modules that actually need to be transformed by it:
                include: path.resolve(__dirname, 'src'),
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single',         // if we have multiple entrypoints on single HTML file
                                            // dont exactly know what it does though...
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors23',
                  chunks: 'all',
                },
            },
        },
        usedExports: true,          // to determine used exports for each module.
                                        // enabled by default in production    
    }
}