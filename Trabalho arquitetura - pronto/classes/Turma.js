const Aluno = require('./Aluno');

class Turma extends Aluno{
    constructor(nome, login, ra, codigo, nota) {
        super(nome, login, ra);
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 6;
    }
}

module.exports = Turma;