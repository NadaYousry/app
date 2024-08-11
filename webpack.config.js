const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'counter-app.js',
    library: 'counterApp',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/counter-app/',
  },
  mode: 'development',
};
