const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader'],
            },
            { test: /\.svg$/, loader: 'svg-inline-loader' },
        ],
    },
    mode: 'development',
    devtool: 'source-map',
    performance: { hints: false },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
};
