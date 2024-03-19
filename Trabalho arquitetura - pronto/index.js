const express = require('express');
const app = express();

const Aluno = require("./classes/Aluno");
const Turma = require("./classes/Turma");
const TurmaPresencial = require("./classes/TurmaPresencial");

const Aluno1 = new Aluno("Leandro", "leandrohenrique", "2503514");
const Turma1 = new Turma("Henrique", "henriqueleandro", "2500000", 1, 7)
const TurmaPresencial1 = new TurmaPresencial(10, 10, 10)

console.log(Turma1.codigo)
console.log(TurmaPresencial1.frequencia)

app.listen(3000);
console.log("Funcionando");

