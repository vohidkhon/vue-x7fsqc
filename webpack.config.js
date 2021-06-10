const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './index.js',
   module: {
rules: [
  {test: /\.vue$/,  use: ['vue-loader'] ,exclude: /node_modules/},
  {test: /\.css$/,  use: ['vue-style-loader', 'css-loader' ] ,exclude: /node_modules/},
  {test: /\.(jpg|png|svg)$/,loader: 'file-loader',
	options: {outputPath: "images",
			  esModule: false}}
	]
	
 },
   plugins: [
    new VueLoaderPlugin()
  ]
};
