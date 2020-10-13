const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: '[name].bundle.js'
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
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	resolve: {
		alias: {
			'@Assets': path.resolve(__dirname, 'src/assets'),
			'@Components': path.resolve(__dirname, 'src/components/'),
			'@Utilities': path.resolve(__dirname, 'src/utilities/')
		}
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
