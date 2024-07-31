const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const externals = ["@react-gufo-mf/style-guide-ui"];
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-gufo-mf",
    projectName: "home-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals,
    devServer: {
      port: 9001,
    },
  });
};
