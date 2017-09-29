/*eslint-disable no-console */
var path = require("path");
var webpack = require("webpack");
var express = require("express");
var config = require("../webpack.config");

const PORT = 3000;

var app = express();

var compiler = webpack(config("development"));
app.use(require("webpack-dev-middleware")(compiler));
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${PORT}/`);
});
