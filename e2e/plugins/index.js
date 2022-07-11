const injectDevServer = require("@cypress/react/plugins/react-scripts");

module.exports = (on, config) => {
  if (!config.env.jsConfig) {
    config.env.jsConfig = `${config.fileServerFolder}/jsconfig.json`
  }

  injectDevServer(on, config);
  require('@cypress/code-coverage/task')(on, config);
  return config
};
