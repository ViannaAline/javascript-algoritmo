function sempreRetornaUm () {
    return 1;
    console.log("FIM!!!!!"); // nada após o return é detectado.
}

function textoOuNumero (retornaTexto) {
  return retornaTexto ? "Sou um texto!" : 123;
}
    //  if(retornaTexto) {
  //      return "Sou um texto!";
  //  } else {
  //      return 123;
 //   }


let valor = sempreRetornaUm() + 999;
console.log(valor);

let resultado = textoOuNumero(true);
console.log(resultado);

console.log(textoOuNumero(false));