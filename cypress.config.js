const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1080,
  viewportHeight: 1920,
  projectId: "459tn7",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});