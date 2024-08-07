const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");
const dotenv = require("dotenv");

const externals = ["@react-gufo-mf/style-guide-ui"];

module.exports = (webpackConfigEnv, argv) => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

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
    plugins: [new webpack.DefinePlugin(envKeys)],
  });
};
