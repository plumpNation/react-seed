// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const webpack = require('@cypress/webpack-preprocessor');

const fs = require('fs-extra');
const path = require('path');

/**
 * This allows us to have more than one cypress configuration file.
 * For example, we can have one for styleguidist work, and one for the application.
 *
 * @param {string} file
 */
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(`${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  // `config` is the resolved Cypress config
  const file = config.env.configFile || 'sdd';

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../config/webpack.config'),
    watchOptions: {},
  };

  // `on` is used to hook into various events Cypress emits
  on('file:preprocessor', webpack(options));

  return getConfigurationByFile(file);
};
