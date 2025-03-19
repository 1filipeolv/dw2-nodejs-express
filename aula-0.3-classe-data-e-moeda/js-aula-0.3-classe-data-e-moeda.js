// CLASSES NO JAVASCRIPT
class Carro {
  // Nome de classes devem iniciar com a primeira letra maiúscula.
  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroEsportivo = new Carro("Mercedes","C180", 2025)
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

// Instãncia carroPopular 
const carroPopular = new Carro()
carroPopular.marca = "Honda"
carroPopular.modelo = "City"
carroPopular.ano = "2025"
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

// Adicionando um novo atributo
carroEsportivo.corNeon = "Cinza"

// Adicionando um novo método
carroEsportivo.turbo = function() {
    return "Vrummmmmm! O carro está acelerando!!!"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`) 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JAVASCRIPT
const dataAtual = new Date()
console.log(typeof(dataAtual))

// Pegando o dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dataAtual}.`)

// Pegando o mês atual
const mes = dataAtual.getMonth()+1 // Somar +1 por conta que no javascript começa a contar a partir do 0.
console.log(`Estamos no mês ${mes}.`)

// Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(`Ano atual: ${ano}.`)

// Adicionando DIAS, MESES E ANOS À DATA ATUAL
// Adicionar 10 à data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

//Exibe a nova data:
console.log(`Daqui a 10 dias será ${dataAtual.getDate()}.`)

// Adicionar 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Exibe a nova data:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth() +1}.`)

// Adicionar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibe o novo ano
console.log(`Daqui a 2 anos será ${dataAtual.getFullYear()}.`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRABALHANDO COM MOEDAS NO JAVASCRIPT
let salario = 2005.30
console.log(salario)
// Mostrando as casas decimais
console.log(salario.toFixed(2))
// Ocultando as casas decimais
console.log(salario.toFixed(0))
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace('.',','))

// Formatação de moedas
// Mostrando o sálario em REAL (R$)
console.log(salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})); // Importante!

// Mostrando o salário em DÓLAR (USD)

console.log(salario.toLocaleString('en', {style: 'currency', currency:'USD'}));

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176

console.log(salarioDolar.toLocaleString('pt-br', {style: 'currency', currency:'USD'}));

// Mostrando o salário em EURO (EUR)

console.log(salario.toLocaleString('eu', {style: 'currency', currency:'EUR'}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FORMATAÇÃO DE STRING
const nome = "Filipe de Oliveira Lima"

// ALTERNANDO PARA LETRAS MAIÚSCULAS
console.log(nome.toUpperCase())

// ALTERNANDO PARA LETRAS MINÚSCULAS
console.log(nome.toLowerCase())

// CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)

// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g,"")
console.log(novoNome)
console.log(novoNome.length)
