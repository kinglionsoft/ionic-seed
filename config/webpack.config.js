const path = require('path');
const defaults = require('@ionic/app-scripts/config/webpack.config');

module.exports = function () {

  if (!defaults.resolve.alias) {
    defaults.resolve.alias = {};
  }
  defaults.resolve.alias.kl = path.resolve('src/kl');

  return defaults;
};
