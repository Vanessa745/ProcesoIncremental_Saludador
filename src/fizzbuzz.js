function convertirFizzbuzz(n) {
    let resultado = "";
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0){
            resultado += "Fizz";
            if(i % 5 == 0){
                resultado += "Buzz";
            }
        }else{
            if(i % 5 == 0){
                resultado += "Buzz";
            }else{
                resultado += i + "";
            }
        }
        if(i < n){
            resultado += ", ";
        }
    }
    return resultado;
}

export default convertirFizzbuzz;