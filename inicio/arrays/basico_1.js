//     indice  0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]; // os valores internos podem ser modificados, porém a variável notas não.

console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[6]); // não existe o indice, o elemento pois não foi definido

notas[4] = 8.7; // elementos de array podem ser modificados.

console.log(notas);


