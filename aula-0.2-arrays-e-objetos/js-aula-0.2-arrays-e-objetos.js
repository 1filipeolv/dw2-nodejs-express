// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos índices...");
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log("Exibindo a lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`);
}

console.log("Exibindo lista através do forEach...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo lista através do forEach com os índices...");
Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`);
});

//Métodos de Manipulação de Vetores
let vetor = ["Laranja", "Maça", "Banana"];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

//Método PUSH - Insere um novo elemento no final do VETOR
vetor.push("Abacaxi");
console.log(`Nosso vetor agora eh: ${vetor}`);

//Método UNSHIFT - Insere novo elemento no início do VETOR
vetor.unshift("Pera");
console.log(`Nosso vetor no momento eh: ${vetor}`);

// Método LENGTH - Retorna o número de elementos no vetor
let numeros = [6, 800, 2, 900, 3];
console.log(`Nossa lista de numeros é: ${numeros}`);
console.log(`O número de elementos do vetor é ${numeros.length}.`);

// Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}.`);
vetor.sort();
console.log(`Agora primeiro elemento da lista de frutas é: ${vetor[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}`);

// Ordenação de npumeros com SORT
console.log(`Nossa lista de númeos é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordenando de forma CRESCENTE
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma DECRESCENTE
console.log(numeros.sort((a, b) => b - a));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJETOS LITERAIS(Não são derivados de Classes)
// Objetos possuem Atributos (Características) e Métodos (Ações)
// Lado esquerdo: chaves / Lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "Mercedes",
  cor: "Cinza",
  // Métodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};
console.log(`O modelo do carro é ${carro.modelo}.`);
console.log(`A cor do carro é ${carro.cor}.`);
carro.acelerar();
carro.frear();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};
console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}. ${produto.descricao}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ARRAY DE OBJETOS

const listaProdutos = [
    {
        nome: "Computardor",
        marca: "Lenevo",
        preco: 3000,
        descricao: 'Pc moderno com bom desempenho',
    },
    {
        nome: "Tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: 'Ótima velocidade de processamento',
    },
    {
        nome: "Celular",
        marca: "Apple",
        preco: 12000,
        descricao: 'Ultra resistente. Muito barato!',
    },
];

// Exibindo o ARRAY DE OBJETOS com forEach:
listaProdutos.forEach(produto =>{
    console.log(`Produto: ${produto.nome}`);
    console.log(`Marca: ${produto.marca}`);
    console.log(`Preco: ${produto.preco}`);
    console.log(`Descrição: ${produto.descricao}`);
    
}
)

console.table(listaProdutos);
