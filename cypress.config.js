const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: ['e2e/**/*.spec.js'],
    supportFile: './e2e/support/index.js',
    setupNodeEvents(on, config) {
      // bind to the event we care about
      on('before:spec', (arg1, arg2) => {
        console.log('before spec');
      });
    },
  },
});
