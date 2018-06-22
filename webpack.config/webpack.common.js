/**
 * 通用配置
 * Created by easterCat on 2017/10/30.
 */
const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = {
    context: path.resolve(ROOT_PATH, './app'),
    resolve: {
        modules: [
            path.resolve(ROOT_PATH, './node_modules'),
        ],
        alias: {
            'jQuery': 'jquery/dist/jquery',
            '$': 'jquery/dist/jquery',
            Util$: path.resolve(ROOT_PATH, 'easter_utils/index.js'),
            LAYUI_CSS$: path.resolve(ROOT_PATH, 'alias/layui/layui/layui/css/layui.css'),
            LAYER_CSS$: path.resolve(ROOT_PATH, 'alias/layui/layui/layui/css/modules/layer/default/layer.css'),
        },
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    },
    entry: {
        app: ['babel-polyfill', './index.js'],
    },
    output: {
        path: path.resolve(ROOT_PATH, './dist'), //打包的文件夹
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader"
                }]
            },
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "eslint-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name (file) {
                            return 'fonts/[name].[ext]'
                        }
                    }
                }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader'
                }]
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader'
                }]
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, './app'),//为一个目录下的文件提供本地服务器，在这里设置其所在目录
        historyApiFallback: true,//跳转将指向index.html
        inline: true,//开启自动刷新页面
        port: 1333,//设置监听端口1333
        hot: true,//开启热替换
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     "$": "jquery",
        //     "jQuery": "jquery",
        //     "window.jQuery": "jquery"
        // })
    ]
};