const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'as2o36',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
