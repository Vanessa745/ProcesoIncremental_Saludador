function saludar(nombre, hora, genero) {
    let saludo = "";
    let bienvenida = "";
    if(hora < 12) {
        saludo = "Buenos días ";
    } else if(hora < 18) {
        saludo = "Buenas tardes ";
    } else {
        saludo = "Buenas noches ";
    }

    if (genero === "masculino") {
        bienvenida = "Bienvenido ";
    } else if (genero === "femenino") {
        bienvenida = "Bienvenida ";
    }

    return saludo + nombre + ". " + bienvenida;
}

export default saludar;