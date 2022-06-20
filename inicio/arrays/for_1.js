const numeros = [1, 2, 3, 4, 5, 6, 11, 45]; // laço for flexível

for(let i = 0; i < numeros.length; i++) { // lenght - comprimento do array
    console.log(i, numeros[i]); // refere-se ao indice
}

for(let i = 0; i < numeros.length; i += 2) { 
    console.log(i, numeros[i]); 
}