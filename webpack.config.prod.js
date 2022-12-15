const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          // to dynamically set the name to the original source file's name and also include the contenthash
        }),
    ],
    // When the optimization is overridden 
      // then the defaults of webpack do not take effect, using only the provided ones
    optimization: {
      minimizer: [
        '...',            // all existing minimizers are retained as it is...
                            // if you omit this '3 dots', you need to explicitly add new TerserPlugin(),
                            // which minifies .js files
        // new TerserPlugin(),
        new cssMinimizerPlugin(),
      ],
      // runtimeChunk: 'single',         // if we have multiple entrypoints on single HTML file
                                            // dont exactly know what it does though...
    }
});