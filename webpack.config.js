const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env, args) {
	return {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		// mode: env.production ? 'production' : 'development',
		mode: 'development',
		devtool: 'source-map',
		devServer: {
			contentBase: './dist',
			port: 4000
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					loader: 'file-loader',
					options: {
						name: 'assets/[name].[hash].[ext]'
					}
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new htmlWebpackPlugin({
				title: 'Clothy',
				scriptLoading: 'defer',
				inject: 'body',
				template: './src/index.html'
			})
		]
	};
};
