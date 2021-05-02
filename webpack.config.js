/*
 * @Description: 
 * @Author: changqing
 * @Date: 2021-04-28 17:51:19
 * @LastEditTime: 2021-05-02 15:04:30
 * @LastEditors: changqing
 * @Usage: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    devtool: false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolveLoader: {
        alias: {
          "px2rem-plus-loader": path.resolve('./loaders/px2rem-plus-loader.js')
        },
        modules: [path.resolve('./loaders'), 'node_modules']
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, 
            // {
            //     loader: 'px2rem-loader',
            //     options: {
            //         remUni: 75,
            //         remPrecision: 8
            //     }
            // },
            {
              loader: 'px2rem-plus-loader', //path.resolve(__dirname, 'loaders/px2rem-plus-loader.js'),
              options: {
                  remUnit: 75,
                  remPrecision: 8,
                  baseDpr:1,
                  exclude:/antd\.css/
              }
            }
            ]
          },
          {
            test:/\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env','@babel/preset-react'],
                  plugins: ['@babel/transform-runtime']
                }
              },
            exclude: /node_modules/,        
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
          { template: './src/index.html', 
            title:'index',
            inject: true
          }
        ),
    ]
};