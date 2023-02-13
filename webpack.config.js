/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const cssLoaders = (ext) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {},
        },
        "css-loader"
    ];

    if (ext) {
        loaders.push(ext);
    }

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, "./src"),
    mode: "development",
    entry: "./index.ts",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4050,
        hot: true,
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        enforceExtension: false,
        fallback: {
          fs: false,
        },
        alias: {
            handlebars: "handlebars/dist/handlebars.min.js",
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders("less-loader")
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders("sass-loader")
            }, 
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "ts-loader",
                    options: {
                      configFile: path.resolve(__dirname, "./tsconfig.json"),
                      transpileOnly: true
                    },
                  },
                ],
            },
        ]
    }
};
