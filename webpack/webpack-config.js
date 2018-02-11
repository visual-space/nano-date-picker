let webpack = require('webpack'),
    path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Constants
const LIB_DIR = path.join(__dirname, '../lib'),
    SRC_DIR = path.join(__dirname, '../src'),
    NODE_MODULES_DIR = path.join(__dirname, '../node_modules')

module.exports = {

    entry: './src/nano-date-picker.ts',

    output: {
        path: LIB_DIR,
        publicPath: '/',
        filename: 'nano-date-picker.js'
    },

    resolve: {
        extensions: ['*', '.ts', '.js']
    },

    module: {

        rules: [
            {
                test: /\.ts?$/,
                use: 'awesome-typescript-loader',
                include: SRC_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
        ]

    },

    // plugins: [
    //   new UglifyJsPlugin()
    // ],

    externals: {
        // debug: 'debug' // REVIEW, this seems not to work right now
    },

    stats: {
        colors: true,
        modules: true,
        reasons: true,
        errorDetails: true
    }
}