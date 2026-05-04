const NOME = "Gabriel Assis";
let tituloProfissional = "Desenvolverdor";
let minhaBio = "Sou um cara esforçado";
let anoFormatura = 2026;
let anoIgresso = 2025;
let mesFormatura = 12;
let diaFormatura = 31;
let mesIgresso = 1;
let diaIgresso = 15;
let indefinido;
let nulo = null;
//let curso = "Desenvolvimento de Sistemas";

const DATAATUAL = new Date(); //data atual, data completa, biblioteca de data do JavaScript
let mesAtual = DATAATUAL.getMonth() + 1; //pega o mês atual (adiciona 1 pois os meses começam em 0)
let anoAtual = DATAATUAL.getFullYear(); //pega o ano atual
let diaAtual = DATAATUAL.getDate(); //pega o dia atual

let curso = {
    nome: "Desenvolvimento de Sistemas",
    duracao: "2 anos",
    instituicao: "PROZ EDUCAÇÃO"
}

const dataInicio = new Date(anoIgresso, mesIgresso - 1, diaIgresso);
const dataFinal = new Date(anoFormatura, mesFormatura - 1, diaFormatura);

const tempoTotal = dataFinal - dataInicio;
const tempoDecorrido = DATAATUAL - dataInicio;

let porcentagem = (tempoDecorrido / tempoTotal) * 100;
porcentagem = Math.min(Math.max(porcentagem, 0), 100).toFixed(2);


console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoIgresso);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = `Profissão: ${tituloProfissional}`;
document.getElementById("minhaBio").innerText = `Biografia: ${minhaBio}`;
document.getElementById("anoIgresso").innerText = `Ano de Igresso: ${anoIgresso}`;
document.getElementById("anoFormatura").innerText = `Ano da Formatura: ${anoFormatura}`;
document.getElementById("curso").innerText = `Curso: ${curso.nome}`;
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos, ${mesFormatura - mesAtual} meses e ${diaFormatura - diaAtual} dias. Progresso: ${porcentagem}% concluído.`;