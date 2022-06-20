const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach(function() {
    console.log("Dentro do forEach!")  // executou 6 vezes de acordo com a quantidade de elementos
});

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento);

numeros.forEach(function(el) {
    console.log(el);
});

numeros.forEach(function(_, i) {
    console.log(_, i);
});
/* forma de percorrer cada indice do array 
for(let n of numeros) {
    console.log(n);
}
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);    
}
*/