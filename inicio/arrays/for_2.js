const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// foreach - percorra cada um dos elementos

for(let nota of notas) { // vai percorrer cada um dos elementos do array, melhor forma de fazer essa operação.
    console.log(nota);
}

let valores = ""
for(let nota of notas) { // of acessa os valores
    valores += nota + " ";
}

console.log(valores);

let indices = "";

for(let indice in notas) { // in acessa os indices
    indices += indice + " ";
}
console.log(indices); // mostra os indices dos elementos.