let a = 1;
let b = 2;

//console.log(++a === b++);  
a++; //o operador prefixado tem uma prioridade maior na execução.
console.log(a === b); // após isso o operador === tem a prioridade.
b++; // ele vai ler a++ e a===b