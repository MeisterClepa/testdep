import constants from "../globals/constants.js";

export default function firstCheck() {
  return {
    DEP_NAME: constants.DEP_NAME,
    DEP_VERSION: constants.DEP_VERSION,
    enableFoo: constants.FEATURE_FLAGS.enableFoo,
  };
}
