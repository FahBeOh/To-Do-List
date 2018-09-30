const path = require("path");

module.exports = {
    entry: './client/js/app.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './client/js/')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
  };