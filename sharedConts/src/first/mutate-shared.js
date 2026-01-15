import shared from "../globals/shared.js";

export default function incAndSet(key = "k", val = "v") {
  shared.counter += 1;
  shared.store[key] = val;
  return { counter: shared.counter, store: { ...shared.store } };
}
