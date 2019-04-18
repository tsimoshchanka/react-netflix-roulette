const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],
				},

				test: /\.js$/
            }
		]
	},

	output: {
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},

	optimization: {
        mergeDuplicateChunks: true,
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 10000,
			name: true
        }
	},

	plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'netflixroulette',
            hash: false,
            template: './src/index.html'
        })
    ]
};
