const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:'development',
    entry:{
        'xx':"./src/index.js"

    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8080/'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'

                    }
                }]
        }

        ]
    },
    plugins:
        [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            chunks:['xx'],
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextWebpackPlugin("css/style.css")
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:8080,
        hot:true,
        open:true
    }
}