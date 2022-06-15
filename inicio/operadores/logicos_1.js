/*
(E)/(And) && As duas operações precisam ser verdadeiras - Se uma operação for falsa, a resposta será falsa.
(OU)/(OR) Se uma situação for verdadeira - (V OU F = V)
(XOR) / ou exclusivo - uma operação precisa ser diferente da outra para ser verdadeira. exemplo ( V OU F = V) / (v ou v = f)
NOT - negação lógica - NOT F = V / NOT V = F - inverte o valor original
NOT (NOT V) = Verdadeiro, pois foi negado duplamente.
*/
let temDinheiro = false;
let estaEnsolarado = true;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado; // Operador And

console.log(resultadoE);

let ensolarado = true;
let carroEstaNaGaragem = true;

let resultadoOu = "#2 (OU) - Vai pro shopping? ";
resultadoOu += ensolarado || carroEstaNaGaragem // Operador OU ||
console.log(resultadoOu);

console.log(true ^ false); // resultado 1
console.log(false != false); // resultado false
console.log(true != false); // resultado true
console.log(false !== false); // resultado false
console.log("Não verdadeiro: " + !true); // resultado false
console.log("Não falso: " + !false); // resultado true



