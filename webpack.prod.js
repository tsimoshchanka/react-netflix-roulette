const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    devtool: 'source-map',

	optimization: {
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
                            sourceMap: false,
                            importLoaders: true,
                            modules: true,
                            localIdentName: '[hash:base64:8]',
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
