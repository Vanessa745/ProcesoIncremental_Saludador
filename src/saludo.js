function saludar(nombre, hora, genero, edad, idioma) {
    let saludo = "";
    let bienvenida = "";
    let titulo = "";

    if(idioma === "ingles") {
        if(hora < 12) {
            saludo = "Good morning ";
        } else if(hora < 18) {
            saludo = "Good afternoon ";
        } else {
            saludo = "Good evening ";
        }

        if (genero === "masculino") {
            bienvenida = "Welcome";
            if(edad <= 30) {
                titulo = "Young man "
            } else {
                titulo = "Sir "
            }
        } else if (genero === "femenino") {
            bienvenida = "Welcome";
            if(edad <= 30) {
                titulo = "Miss "
            } else {
                titulo = "Madam "
            }
        }
    } else {
        if(hora < 12) {
            saludo = "Buenos días ";
        } else if(hora < 18) {
            saludo = "Buenas tardes ";
        } else {
            saludo = "Buenas noches ";
        }

        if (genero === "masculino") {
            bienvenida = "Bienvenido";
            if(edad <= 30) {
                titulo = "Joven "
            } else {
                titulo = "Señor "
            }
        } else if (genero === "femenino") {
            bienvenida = "Bienvenida";
            if(edad <= 30) {
                titulo = "Señorita "
            } else {
                titulo = "Señora "
            }
        }
    }

    return saludo + titulo + nombre + ". " + bienvenida;
}

export default saludar;