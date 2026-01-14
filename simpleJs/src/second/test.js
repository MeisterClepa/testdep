import fix from "../first/test.js"
export function encode(str) {
  return `ENCsssssssssss(${String(str)})`;
}

export function decode(str) {
  const s = String(str);
  return s.startsWith("ENC(") && s.endsWith(")")
    ? s.slice(4, -1)
    : s;
}
export function decode2() {
  return fix.encode("hello").toUpperCase
}
export default {
  encode,
  decode,
  decode2
};
