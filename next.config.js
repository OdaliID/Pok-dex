// next.config.js
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['postcss'] = path.resolve(__dirname, 'node_modules/postcss');
    return config;
  },
};
