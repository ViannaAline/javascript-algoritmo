// Criar duas expressões que vão resultar em TRUE (OPERADORES Aritmético / Relacionais / Lógicos)
let verdadeira1 = true;
let verdadeira2 = true;

let japa = verdadeira1 && verdadeira2;
console.log("Vamos no rodízio Japones? " + japa);
let sorvete = verdadeira1 == verdadeira2;
console.log("Vamos tomar sorvete? " + sorvete);

// Criar duas expressões que vão resultar em FALSE (OPERADORES Aritmético / Relacionais / Lógicos)
let falso1 = false;
let falso2 = false;

let cinema = falso1 && falso2;
console.log("Vamos no cinema? " + cinema);
let shopping = falso1 !== falso2;
console.log("Vamos ao Shopping após o rodízio? " + shopping);

let falsa1 = 1 + 4 <= 2 || 2 > 5;
let falsa2 = 2 * 5 !==  5 + 5;

console.log(falsa1);
console.log(falsa2);