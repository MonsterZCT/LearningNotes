// 一个常见的`webpack`配置文件
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	// target:'node',
	mode: 'production',
	entry: ['./index.js'], //__dirname + "/webpack/index.js", //已多次提及的唯一入口文件
	output: {
		path: __dirname + '/dist/',
		filename: "bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.txt$/,
				use: 'raw-loader'
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ // 需要先创建index.html
			template: './dist/index.html'
		})
	]
};