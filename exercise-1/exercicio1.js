// EXERCICIO 1
function nome(seunome){
 console.log("Seja bem-vindo " + seunome);
}
nome("Filipe");

function idade(suaidade){
    console.log("A sua idade é: " + suaidade);
   }
   idade("19");

function cidade(suacidade){
    console.log("Você mora em: " + suacidade);
   }
   cidade("Registro-SP");   

////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 2

function divisão(n1, n2) {
    let resultado = n1 / n2;
    console.log(`A divisão dos dois números é  ${resultado}.`);
  }
  let n1 = 10;
  let n2 = 2;
  divisão(n1, n2);

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // EXERCICIO 3

  function multiplição(n1, n2, n3) {
    return n1 * n2 * n3;
  }
  multiplição(7, 7, 7);
  console.log(`O resultado da multiplicação é ${multiplição(7, 7, 7)}.`);
 
////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 4

function maiorOuMenor(idade) {
    if (idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
  
  let Idade = 77; 
  
  console.log(`A pessoa com ${Idade} anos é ${maiorOuMenor(Idade)}.`);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 5

const resultado = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media <= 5) {
      return "Reprovado";
    } else {
      return "Aprovado";
    }
  };
  
  let nota1 = 4;
  let nota2 = 6;
  console.log(`Você foi ${resultado(nota1, nota2)}.`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 6

const triplo = (numero) => numero * 3;

let numero = 5;
console.log(`O triplo do número é ${triplo(numero)}.`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 7

const soma = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

let num1 = 2, num2 = 4, num3 = 6, num4 = 8;
console.log(`O total foi de ${soma(num1, num2, num3, num4)}.`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCICIO 8

(function(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
  })("Filipe");