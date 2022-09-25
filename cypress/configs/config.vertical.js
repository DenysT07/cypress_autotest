const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  defaultCommandTimeout: 5000,
  viewportWidth: 1080,
  viewportHeight: 1920,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
