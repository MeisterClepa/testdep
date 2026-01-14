import { encode, decode } from "node-encoder";

function testEncodeDecode(text = "hello") {
  const encoded = encode(text);
  const decoded = decode(encoded);

  return {
    input: text,
    encoded,
    decoded,
    ok: decoded === text,
  };
}

export default {
  encode,
  decode,
  testEncodeDecode,
};
