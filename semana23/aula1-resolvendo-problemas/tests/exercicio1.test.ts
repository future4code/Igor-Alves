import { checkOneEditString } from "../src/exercicio1";

describe("Testing checkOneEditString function", () => {
  it("Should return false for o input 'bananaaa' and 'banana'", () => {
    const result = checkOneEditString('bananaaa', 'banana');
    expect(result).toEqual(false);
  });
  it("Should return true for o input 'banan' and 'banana'", () => {
    const result = checkOneEditString('banan', 'banana');
    expect(result).toEqual(true);
  });
  it("Should return true for o input 'bananak' and 'banana'", () => {
    const result = checkOneEditString('bananak', 'banana');
    expect(result).toEqual(true);
  });
  it("Should return true for o input 'panana' and 'banana'", () => {
    const result = checkOneEditString('panana', 'banana');
    expect(result).toEqual(true);
  });
});