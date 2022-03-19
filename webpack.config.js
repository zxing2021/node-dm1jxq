let path = require("path");
let Clean = require("clean-webpack-plugin").CleanWebpackPlugin;
let Html = require('html-webpack-plugin');
let jsxLoader = path.resolve("./jsx-loader.js");
let css = {
	loader: "css-loader",
	options: {
		importLoaders: 1,
		esModule: false
	}
}
let postcss = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: ["postcss-preset-env"]
		}
	}
}
let babel = {
	loader: "babel-loader",
	options: {
		presets: [["@babel/preset-env", {
			useBuiltIns: 'usage',
			corejs: 3
		}], '@babel/preset-react']
	}
}
let file = {
	type: "asset",
	generator: {
		filename: "file/[name][hash:6].[ext]"
	}, parser: {
		dataUrlCondition: {
			maxSize: 24 * 1024
		}
	}
}
let less = {
	loader: 'less-loader',
	options: {
		lessOptions: {
			modifyVars: {
				'primary-color': '#1DA57A'
			}, javascriptEnabled: true
		}
	}
}

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "dist.js",
		path: path.resolve(__dirname, "dist")
	}, module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', css, postcss]
			}, {
				test: /\.less$/,
				use: ['style-loader', css, postcss, less]
			}, {
				test: /\.(jpg)$/,
				...file
			}, {
				test: /\.(otf|eot|svg|ttf|woff)$/,
				...file
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [babel]
			}, {
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [babel, jsxLoader]
			}
		]
	}, plugins: [
		new Clean(),
		new Html({
			template: "./public/index.html"
		})
	],
	target: "web",
	devServer: {
		hot: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}, performance: false
}
