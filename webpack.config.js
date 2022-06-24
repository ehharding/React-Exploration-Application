module.exports = {
  devtool: 'inline-source-map',
  entry: 'src/index.js',
  output: { filename: 'consultant-dashboard-app.js' },
  resolve: { extensions: ['.css', '.js', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] }
          },
          {
            loader: 'ts-loader',
            options: { compilerOptions: { noEmit: false } }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: { limit: 10000 }
          }
        ]
      }
    ]
  }
};
