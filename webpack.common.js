 const path              = require('path');
 const webpack           = require('webpack');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
 const autoprefixer      = require('autoprefixer');
 const extractSass       = new ExtractTextPlugin({
    filename  : '../css/main.min.css',
    allChunks : true
});

 
 module.exports = {
    entry  : ['./src/index.js'],
    output : {
        path     : path.resolve(__dirname, './public/js'),
        filename : 'app.bundle.js'
    },
    plugins : [
        extractSass,
        new webpack.LoaderOptionsPlugin({
            minimize : false,
            options  : {
            }
        })
    ],
    module: {
        rules: [
            {
                test    : /\.(js|jsx)?$/,
                use  : ['babel-loader']
            },
            { 
                test   : /\.(sass|scss)$/,
                loader : extractSass.extract(['css-loader', 'sass-loader'])
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            }
        ]
    },
    resolveLoader : {
        modules : [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve : {
        modules : [
            path.resolve('./src'),
            path.join(__dirname, 'node_modules')
        ],
        extensions : ['.js', '.jsx']
    }
 };
