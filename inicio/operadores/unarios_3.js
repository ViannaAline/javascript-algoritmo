console.log(!true);
console.log(!false);
console.log(!(6 > 4));

console.log(!!"texto"); // negação por causa do ! / !! dupla negação
console.log(!!""); // uma string vazia será avaliada como false
console.log(!!" "); // uma string com espaço ekm branco será avaliada como true

console.log(!!1); // todos os números serão true (com excessão do 0)
console.log(!!0); // sempre será false
console.log(!!-1); 
console.log(!!-0.0001);


