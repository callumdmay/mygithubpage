const path = require("path");
const webpack = require("webpack");

function config(env) {
  let plugins = [];

  plugins.push(new webpack.DefinePlugin({
     "process.env": {
       "NODE_ENV": JSON.stringify(env)
     }
   }));

   if (env === "production") {
     plugins.push(new webpack.HotModuleReplacementPlugin());
     plugins.push(new webpack.optimize.UglifyJsPlugin({
       compressor: {
         warnings: false
       }
     }));
     plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
   }

  return {
    context: path.resolve(__dirname, "./src"),
    entry: "./index",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    plugins: plugins,
    module: {
      loaders: [
         {
           test: /\.js$/,
           loader: "babel-loader",
           include: path.resolve(__dirname, "src")
         }
       ]
    }
  }
}

module.exports = config;
