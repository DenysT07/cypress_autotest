const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '4vv8dq',
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1080,
  viewportHeight: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});