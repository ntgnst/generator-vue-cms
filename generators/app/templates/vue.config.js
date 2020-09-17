const path = require('path');

module.exports = {
  publicPath: '',
  configureWebpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
  }
};
