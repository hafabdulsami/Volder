const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: "development",
  entry: {
    theme: "./src/assets/user.scss",
    user: "./src/assets/user.scss"
  },
  output: {
    path: path.resolve(__dirname, "public/css")
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    }),
    new CleanWebpackPlugin()
  ],
  devtool: "source-map", // Add this line for source maps
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
