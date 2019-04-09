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
	}
});
