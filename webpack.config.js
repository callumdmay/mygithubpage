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
     plugins.push(new webpack.optimize.UglifyJsPlugin({
       compressor: {
         warnings: false
       }
     }));
     plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
   }

   plugins.push(new webpack.HotModuleReplacementPlugin());

  return {
    context: path.resolve(__dirname, "./src"),
    entry: ["./index", "webpack-hot-middleware/client"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    plugins: plugins,
    module: {
      loaders: [
         {
           test: /\.js$/,
           loader: ["react-hot-loader", "babel-loader"],
           include: path.resolve(__dirname, "src")
         }
       ]
    }
  };
}

module.exports = config;
