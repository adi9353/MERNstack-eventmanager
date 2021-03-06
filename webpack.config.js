var path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
	entry: "./src/index",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public")
	},
	watch: true,
	module:{
		rules: [
		{
			test:/\.js$/,
			exclude:/node_modules/,
			loader: "babel-loader",
			options: {
			    presets: ["react", "es2015", "stage-1"]
			}
		}
		]
	}
}