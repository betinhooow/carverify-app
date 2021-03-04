/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile (file) {
  // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
  const pathToConfigFile = path.resolve('cypress/env', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())

  // aceita um valor de "file" ou usa "local" por padrão
  const file = config.env.file || 'local'
  console.log(file);
  
  return getConfigurationByFile(file)
}
