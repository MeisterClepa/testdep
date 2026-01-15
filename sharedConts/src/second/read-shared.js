import { shared } from "../globals/shared.js";

export default function readShared() {
  return { counter: shared.counter, store: { ...shared.store } };
}
