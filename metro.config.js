const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add Metro aliases for Formik's lodash deep imports
config.resolver.extraNodeModules = {
  "lodash/isPlainObject": require.resolve("lodash.isplainobject"),
  "lodash/cloneDeep": require.resolve("lodash.clonedeep"),
  "lodash/clone": require.resolve("lodash.clone"),
  "lodash/toPath": require.resolve("lodash.topath"),
};

module.exports = withNativeWind(config, { input: "./global.css" });
