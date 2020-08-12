const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: './dev/script.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'bundle.js'
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'docs'),
		host: 'localhost',
		port: 9090,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					
				}
			},

            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        {
                        loader: 'css-loader',
                            options: {
                                 modules: {
                                 	localIdentName: '[local]--[hash:base64:5]',
                                 }
                            }
                        }
                
                ]

             },
          
      	]
	},

	plugins: [

		


       new MiniCssExtractPlugin({
            filename: 'style.css'
       }),


      //  new CopyWebpackPlugin([
	     //   	{
		    //    	from: path.resolve('./dev/static'),
		    //    	to: path.resolve('./docs')
		    // }
      //  	]),
      
	]
}