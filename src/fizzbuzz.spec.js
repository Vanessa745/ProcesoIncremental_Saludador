import convertirFizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzbuzz(1)).toEqual("1");
  });

  it("deberia convertir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzbuzz(4)).toEqual("4");
  });

  it("deberia convertir el numero 3 a Fizz", () => {
    expect(convertirFizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia convertir cualquier multiplo de 3 a Fizz", () => {
    expect(convertirFizzbuzz(9)).toEqual("Fizz");
  });

  it("deberia convertir el numero 5 a Buzz", () => {
    expect(convertirFizzbuzz(5)).toEqual("Buzz");
  });

  it("deberia convertir cualquier multiplo 5 a Buzz", () => {
    expect(convertirFizzbuzz(20)).toEqual("Buzz");
  });

  it("deberia convertir cualquier multiplo de 3 y 5 a FizzBuzz", () => {
    expect(convertirFizzbuzz(15)).toEqual("FizzBuzz");
  });
});