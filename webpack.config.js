module.exports = {
    mode: "development",
    entry: "./src/scripts/main.ts",
    output: {
        path: __dirname + "/src/scripts/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts", ".js",
        ],
    },
};