function retornarUmaFuncao() {
    return function () {
        return function () {
            return "Boa tarde!";
        }
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao()); // retorna uma função anonima
console.log(retornarUmaFuncao()()); // retorna uma função anonima
console.log(retornarUmaFuncao()()());
