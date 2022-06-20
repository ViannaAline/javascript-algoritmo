function executar (fn, n1, n2) {
    if (typeof fn === "function") {
        console.log(fn(n1 = 10, n2 = 10)); // se não fosse definido um valor, retornaria NAN
    }
}

function somar (a, b) {
    return a + b;
}

function bomDia() {
    return "Bom dia!";
}

function subtrair (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

executar(somar, 90, 50);
executar(subtrair, 90, 50);
executar(multiplicar, 900, 500);
executar(somar);

executar(bomDia);
console.log(bomDia(10, 20, 30));