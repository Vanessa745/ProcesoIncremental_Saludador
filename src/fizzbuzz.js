function convertirFizzbuzz(n) {
    let resultado = "";
    if(n % 3 == 0){
        resultado = "Fizz";
        if(n % 5 == 0){
            resultado += "Buzz";
        }
    }else{
        if(n % 5 == 0){
            resultado = "Buzz";
        }else{
            resultado = n + "";
        }
    }
    return resultado;
}

export default convertirFizzbuzz;