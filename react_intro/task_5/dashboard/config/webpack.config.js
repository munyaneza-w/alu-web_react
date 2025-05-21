const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      port: 8564,
      liveReload: true,
      historyApiFallback: true,
    },
    mode: "production",
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                      hot: true
                    },
                  },
                ],
            }
        ],
    },
};