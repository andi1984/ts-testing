const WebpackMonitor = require("webpack-monitor");
module.exports = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new WebpackMonitor({
      capture: true,
      launch: true
    })
  ]
};
