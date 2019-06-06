## webpack

```js
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins:[
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

#### Plugins

- `html-webpack-plugin` create `index.html` in dist.
- `clean-webpack-plugin` clean dist when compile.

#### devtool

- `devtool:'inline-source-map'` when error occur, Console will show error location. (no install)

#### others

- `webpack-dev-server` serve `devServer` at `localhost:8080`

```
plugins:[
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
```