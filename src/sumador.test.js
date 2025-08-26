import {sumar, dividir, restar} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia dividir dos numeros", () => {
    expect(dividir(10, 5)).toEqual(2);
  });

  it("deberia dividir dos numeros cualquiera", () => {
    expect(dividir(20, 4)).toEqual(5);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(20, 4)).toEqual(16);
  });

  it("deberia restar dos numeros", () => {
    expect(restar(15, 9)).toEqual(6);
  });
});


