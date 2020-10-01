const path = require('path');
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    node: {
        fs: "empty",
        net: "empty"
    },
    module: {
        rules: [
            {
                test: /\.js&/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }

            }
        ]
    }
}
