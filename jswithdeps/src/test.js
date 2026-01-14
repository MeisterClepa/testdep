export function encode(str) {
  return `ENC(${String(str)})`;
}

export function decode(str) {
  // const s = String(str);
  // return s.startsWith("ENC(") && s.endsWith(")")
  //   ? s.slice(4, -1)
  //   : s;
  return process.cwd()
}

export default {
  encode,
  decode,
};
