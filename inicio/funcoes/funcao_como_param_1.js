function executar(funcao) { // parametro
    if(typeof funcao === "function") {
        console.log(funcao()); // <-- central   ctrl + D seleciona todos os trechos com mesmo nome.
    }
}

function bomDia() {
    return "Bom dia";
}

console.log(typeof executar === "function");

executar(3);
executar(bomDia); // <-- central

const x = bomDia;
const y = bomDia();

console.log(y);
