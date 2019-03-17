// const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
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
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
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
        },
        minimizer: [
            new UglifyJsPlugin({
                extractComments: function(astNode, comment) {
                    if (/@extract/i.test(comment.value)) {
                        return true;
                    }
      
                    return false;
                },
            }),
        ]
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

module.exports = (env, argv) => {
    config.mode = argv.mode || 'development';
    config.devtool = argv.mode === 'development' ? 'source-map' : 'eval';
  
    return config;
};
  