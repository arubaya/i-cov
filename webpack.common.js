const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        stats: "./src/script/main.js",
        search: "./src/script/main-stats.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                // CSS and Style Loader
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/",
                            publicPath: "assets/"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['main', 'stats']
        }),
        new HtmlWebpackPlugin({
            template: "./src/informasi.html",
            filename: "informasi.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: "./src/statistik.html",
            filename: "statistik.html",
            chunks: ['main', 'search']
        }),
        new HtmlWebpackPlugin({
            template: "./src/tentang.html",
            filename: "tentang.html",
            chunks: ['main']
        }),
        new CleanWebpackPlugin()
    ]
};