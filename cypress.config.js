const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '4vv8dq',
  video: false,
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1000,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});