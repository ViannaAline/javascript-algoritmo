// Objeto - Data atributos - (dia/mes/ano) Método - Exibir -> Retornar um texto

const nascimento = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 11;

console.log(nascimento.exibir());

