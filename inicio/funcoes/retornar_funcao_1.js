function retornar () {

    function bomDia() {
        return "Bom dia!!!";
    }
    return bomDia;
}

console.log(retornar); // retorna uma funcao retornar
console.log(retornar()); // retorna uma funcao bomDia
console.log(retornar()()); // retorna a string Bom dia

const umaFuncao = retornar();
console.log(umaFuncao());


