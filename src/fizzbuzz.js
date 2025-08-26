function convertirFizzbuzz(n) {
    if(n % 3 == 0){
        return "Fizz";
    }
    return n + "";
}

export default convertirFizzbuzz;