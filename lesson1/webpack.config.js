const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8080,
		stats: "errors-only",
		open: true
	},
	plugins: [new HtmlWebpackPlugin({
		title: "My custom template generated",
		template: "./src/index.ejs",
		minify:{
			collapseWhitespace: true
		},
		hash: true
	})]
}