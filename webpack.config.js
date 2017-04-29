
var webpack = require('webpack'),
path = require('path'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

const productionMode = (process.env.NODE_ENV==='production');

module.exports = {
    entry: {
        app: [
            './src/main.js',
            './src/style.scss',
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                }),
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.LoaderOptionsPlugin({
          minimize: productionMode,
        })
    ]
};

