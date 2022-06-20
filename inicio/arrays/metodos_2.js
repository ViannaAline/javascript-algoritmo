const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2); // remove elementos dentro de um array - exclui uma quantidade de elementos descrita no indice
console.log(numeros);

// pop - remove o ultimo elemento do array e retorna esse numero
console.log(numeros.pop()); // mostra quais elementos foram removidos
console.log(numeros.pop());
console.log(numeros);
