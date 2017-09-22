const path = require("path");
const webpack = require("webpack");

function config(env) {
  let plugins = [];
  let entry = {};
  let loader = [];
  let alias;

  entry["index"] = ["./index"];
  entry["background"] = "./background";

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
     alias = {
       "react": "preact-compat",
       "react-dom": "preact-compat"
     };
   }

   if (env === "development") {
     plugins.push(new webpack.HotModuleReplacementPlugin());
     loader.push("react-hot-loader");
     entry["index"].push("webpack-hot-middleware/client");
   }

   loader.push("babel-loader");
   return {
     context: path.resolve(__dirname, "./src"),
     entry: entry,
     output: {
       path: path.resolve(__dirname, "./public"),
       filename: "[name].js",
     },
     plugins: plugins,
     module: {
       loaders: [
         {
           test: /\.js$/,
           loader: loader,
           include: path.resolve(__dirname, "src")
         }
       ]
     },
     resolve: {
       alias: alias
     }
   };
 }

module.exports = config;
