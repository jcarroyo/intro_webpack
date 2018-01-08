const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js',
		publicPath: ASSET_PATH
	},
	devServer: {		
		compress: true,
		port: 8080,
		//stats: "errors-only",
		hot: true
		//open: true
	},
	module: {
		rules: [			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'css-loader'},
					{loader: 'style-loader'}
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					//['style-loader', 'css-loader', 'sass-loader'])
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']					
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader'						
					},
					{
						loader: 'image-webpack-loader'
					}
				]
			}			
		]
	},
	plugins: [
	new HtmlWebpackPlugin({
		title: "My custom template generated",
		template: "./src/index.ejs",
		minify:{
			collapseWhitespace: true
		},
		hash: true
	}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new ExtractTextPlugin({
		filename: 'app.bundle.css',
		disable: false,
		allChunks : true
	}),
	new webpack.DefinePlugin({
		'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
	})
	]
}