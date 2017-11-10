module.exports = {
  // start of our react applicaton
  entry: "./app/app.jsx",
  // plain compiled Javascript will be output
  output:
  {
    filename: "public/bundle.js"
  },
  // desribes the transformations we will perform
  module:
  {
    loaders: [
    {
      test: /\.jsx?$/,
      include: /app/,
      loader: "babel",
      query:
      {
        presets: ["react",
          "es2015"
        ]
      }
    }]
  },
  // debug react code. Errors will have lines and file names
  devtool: "eval-source-map"
};
