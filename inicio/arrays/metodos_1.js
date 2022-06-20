const numeros = [1, 2, 3, 4, 5, 8];

numeros.push(6); // acrescenta um valor no array
numeros[0] = 100; // alterar o elemento do array

console.log(numeros.indexOf(4)); // verifica o indice de um determinado elemento
console.log(numeros.indexOf(4, 4)); // resultado -1 significa que não foi encontrado um indice
console.log(numeros.includes(10)); // ele verifica se o número informado está dentro do array
console.log(numeros.includes(6)); // ele verifica se o número informado está dentro do array
console.log(numeros.join(",")); // ele junta todos os elementos do array e separa com um simbolo
console.log(numeros);


const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2); // ele gera um novo array concatenando os números anteriores