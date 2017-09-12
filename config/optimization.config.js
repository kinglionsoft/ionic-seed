const path = require('path');
const defaults = require('@ionic/app-scripts/config/optimization.config');

module.exports = function () {

  if (!defaults.resolve.alias) {
    defaults.resolve.alias = {};
  }
  defaults.resolve.alias.kl = path.resolve('src/kl');

  return defaults;
};
