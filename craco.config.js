const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF198B",
              "@tabs-card-head-background": "#EFEFEF",
              "@tabs-highlight-color": "white",
              "@icon-color": "#b2b3c6",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
