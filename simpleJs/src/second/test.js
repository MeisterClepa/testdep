export function encode(str) {
  return `ENCsssssssssss(${String(str)})`;
}

export function decode(str) {
  const s = String(str);
  return s.startsWith("ENC(") && s.endsWith(")")
    ? s.slice(4, -1)
    : s;
}

export default {
  encode,
  decode,
};
