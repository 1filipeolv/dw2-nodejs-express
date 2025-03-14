// Comentário em linha JS
/* Comentário
em bloco ... */
// CTRL + ; - Atalho

// Declaração de variáveis no JS
// CONST X LET X VAR
// Por questões de segurança evitar o uso de VAR
// No escopo global CONST não pode ser alterado
const nome = "Filipe"; // Uma constante precisa de um valor
let Nome; // Permite iniciar a variável vazia
// const nome ="Pedro" -> Resulta em um erro!
// let Nome -> Resulta em um erro.
var cor = "azul";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor.
const message = "Hello, World! Iniciando estudos com Javascript";

console.log(message);

let teste = "Teste";

// Typeof (esse comando exibirá o tipo da variável)
const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// O Javascript é uma linguagem de tipagem dinâmica e tipagem fraca.
/////////////////////////////////////////////////////////////////////
// TIPOS DE FUNÇÕES NO JAVASCRIPT
function minhaFuncao() {}
console.log(typeof minhaFuncao);

// FUNÇÃO SIMPLES
function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

// FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro -> É um dado que a função recebe.
// Argumento -> É o dado que é enviado para a função.
function Saudacao(nome) {
  // PARÂMETRO
  console.log("Olá, bem-vindo " + nome); // Concatemando
  // Usando TEMPLATE STRINGS
  console.log(`Olá, bem-vindo ${nome}`);
  // ${} -> Placeholder
}
Saudacao("Filipe"); // ARGUMENTO

//FUNÇÃO COM MAIS DE UM PARÂMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

// FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
Soma(2, 6);
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

// FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}!`);

// ARROW FUNCTION COM PARÃMETRO ÚNICO
// FUNÇÃO FLECHA
const Dobro = (x) => {
  return x * 2;
};
console.log(`Função dobro com Arrow Function. Resultado: ${Dobro(20)}.`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
console.log(`O resultado da operação é: ${calc(6, "*", 6)}.`);

// SIMPLIFICANDO ARROW FUNCTION COM APENAS UM RETORNO

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`);

console.log(`O reusultado da operação eh: ${Calc(7, "*", 7)}`);


// IIFE - Immediatelu Invoked Function Expression
// Funlçao Imediata - última \o/
const iife = (function () {
  console.log("Estou sendo executada imediatamente...");
})();

// IIFE COM PARÂMETRO
const start = (function (app) {
    console.log(`Executando imediatamente o app ${app}`);
  })("Whatsapp");
  

// git add .
// git commit -m "@seu-username"
// git push
