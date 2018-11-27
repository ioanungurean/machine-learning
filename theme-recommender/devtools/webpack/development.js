const path = require('path');
const plugins = require('./plugins');

module.exports = (config) => {
  return {
    entry: {
      index: [
        path.resolve('src/index.js'),
      ],
      vendor: ['react', 'react-dom'],
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: [
            { loader: 'style-loader' },
          ],
        },
      ],
    },

    output: {
      path: path.resolve(process.cwd(), 'public'),
      publicPath: '/',
      filename: '[name].[hash].js',
    },

    devtool: 'cheap-module-source-map',

    devServer: {
      contentBase: path.resolve('public'),
      historyApiFallback: true,
      port: 9000,
      hot: true,
      quiet: true,
      open: true,
    },

    plugins: [
      plugins.HotModuleReplacementPlugin,
      plugins.ErrorOverlayPlugin,
      plugins.FriendlyErrorsWebpackPlugin,
    ],

    optimization: {
      namedModules: true,
    },
  };
};
