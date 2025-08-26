import saludar from "./saludo.js";

describe("Saludar", () => {
    it("Saludar a Maria en idioma español por la mañana", () => {
        expect(saludar("Maria", 9, "femenino", 25, "español")).toBe("Buenos días Señorita Maria. Bienvenida");
    })
})

describe("Saludar", () => {
    it("Saludar a Maria en idioma inglés por la tarde", () => {
        expect(saludar("Maria", 15, "femenino", 25, "ingles")).toBe("Good afternoon Miss Maria. Welcome");
    })
})