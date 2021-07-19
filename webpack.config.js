const path = require('path');

//要想运行起来直接把路径换成想要编译的路径  还要把package.json script 中的 EXAMPLE 删掉 要想 这样用还需要东西？？

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

// const example = process.env['cone-filter.js'].replace(/[\/]|\.\./g, '') || 'cone.js';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src','image-slicing.js'),//  路径 换这里    
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ].concat(vtkRules),
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    hot: false,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true,
    },
  },
};

