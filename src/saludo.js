function saludar(nombre, hora, genero, edad) {
    let saludo = "";
    let bienvenida = "";
    let titulo = "";
    if(hora < 12) {
        saludo = "Buenos días ";
    } else if(hora < 18) {
        saludo = "Buenas tardes ";
    } else {
        saludo = "Buenas noches ";
    }

    if (genero === "masculino") {
        bienvenida = "Bienvenido ";
        if(edad <= 30) {
            titulo = "Joven "
        } else {
            titulo = "Señor "
        }
    } else if (genero === "femenino") {
        bienvenida = "Bienvenida ";
        if(edad <= 30) {
            titulo = "Señorita "
        } else {
            titulo = "Señora "
        }
    }

    return saludo + titulo + nombre + ". " + bienvenida;
}

export default saludar;