const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry_webpack.js");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry:entry,
    mode:'development',
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
                use:[{
                    loader:"css-loader",
                    options:{
                        importLoaders:1
                    }

                },'postcss-loader']
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
        }, {
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'

        }, {
                test:/\.scss/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }],
                    fallback:"style-loader"
                })

        },{
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        "es2015","react"
                    ]
                }
            },
            exclude:/node_modules/
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
        new ExtractTextWebpackPlugin("css/style.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('bcyyyyyy'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from :__dirname + '/src/public',
            to:'./public'
        }])
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