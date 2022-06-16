// imprimir no console do valor 7 até o valor 3
let valor = 7;

while (valor >= 3) {
    console.log(valor);
    valor--;
}

for (let i = 7; i >= 3; i--) { // run and debug - mostra passo a passo da operação com o F10
    console.log(i); // bolinha vermelha são os breakpoints
}
console.log("Fim!");