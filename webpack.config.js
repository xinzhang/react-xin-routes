var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['./app/routes.jsx'],
	output: { 
		path: path.resolve(__dirname, "build"), 
		filename: 'bundle.js' 
	},
	devServer: {
		cotnentBase: 'web',
		port: 14300,
		hot: true,
		inline: true
	},
	module: {
		loaders:[{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: [
				/node_modules/
			],
			query: {
				presets: ['es2015', 'react']
			}
		},
		{ test: /\.css$/, excludes: [/node_modules/], loader: "style!css" },
		{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" } ]
	}
}