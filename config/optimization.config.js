const path = require('path');
const defaults = require('@ionic/app-scripts/config/optimization.config');

module.exports = function () {

  defaults.resolve.alias = {
    kl: path.resolve('src/kl')
  };

  return defaults;
};
