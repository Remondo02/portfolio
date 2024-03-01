const path = require("path")

module.exports = {
  mode: "none",
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
    ],
  },
}
