const path = require('path');
const defaults = require('@ionic/app-scripts/config/webpack.config');

module.exports = function () {

  if (!defaults.dev.resolve.alias) {
    defaults.dev.resolve.alias = {};
  }
  defaults.dev.resolve.alias.kl = path.resolve('src/kl');

  if (!defaults.prod.resolve.alias) {
    defaults.prod.resolve.alias = {};
  }
  defaults.prod.resolve.alias.kl = path.resolve('src/kl');

  return defaults;
};
