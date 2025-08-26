import convertirFizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzbuzz(1)).toEqual("1");
  });
});