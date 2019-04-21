const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: './dist' 
    },

    module: {
		rules: [
			{
				test: /\.(scss|css)$/,

				use: [
					{
                        loader: 'style-loader'
					},
					{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: true,
                            modules: true,
                            localIdentName: '[name]___[local]',
                        }
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

});
