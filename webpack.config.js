const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
  entry: {
    popup: "./src/popup.js",
    background: "./src/background.js",
    content: "./src/content.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/popup.html", to: "." },
        { from: "public/manifest.json", to: "." },
        { from: "public/icons", to: "icons" }
      ],
    }),
  ],
};

  