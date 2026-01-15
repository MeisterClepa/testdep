import { DEP_NAME, DEP_VERSION, FEATURE_FLAGS } from "../globals/constants.js";

export default function firstCheck() {
  return {
    DEP_NAME,
    DEP_VERSION,
    enableFoo: FEATURE_FLAGS.enableFoo,
  };
}
