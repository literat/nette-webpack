var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'app/assets/js/index.jsx'),
	output: {
		library: 'Application bundle',
		libraryTarget: 'umd',
		sourceMapFilename: 'bundle.js.map',
		path: path.resolve(__dirname, 'www/js'),
		filename: 'bundle.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.(sass|scss).*$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2).*$/,
				loader: 'file?name=/fonts/[name].[ext]'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file?name=/images/[hash].[ext]'
			},
			{
				test: /\.(jsx|js)$/,
				loader: 'babel-loader',
				exclude: [
					/node_modules/,
					/vendor/,
					/limitless/
				],
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.Tether': 'tether'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	],
	devtool: 'source-map'
};