import { stringCompressor } from "../src/exercicio2";

describe("Testing stringCompressor function", () => {
  it("Should return a2b3 for o input 'aabbb'", () => {
    const result = stringCompressor('aabbb');
    expect(result).toEqual("a2b3");
  });
  it("Should return a2b1c5a3 for o input 'aabcccccaaa'", () => {
    const result = stringCompressor('aabcccccaaa');
    expect(result).toEqual("a2b1c5a3");
  });
  it("Should return accurate for o input 'accurate'", () => {
    const result = stringCompressor('accurate');
    expect(result).toEqual("accurate");
  });
  it("Should return escola  for o input 'escola'", () => {
    const result = stringCompressor('escola');
    expect(result).toEqual("escola");
  });
  it("Should return a1c2u1r1a10t1e1  for o input 'accuraaaaaaaaaate'", () => {
    const result = stringCompressor('accuraaaaaaaaaate');
    expect(result).toEqual("a1c2u1r1a10t1e1");
  });
});