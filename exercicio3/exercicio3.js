// EXERCICIO 1

class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return "O herói está correndo.";
    }

    andar() {
        return "O herói está andando.";
    }

    atacar() {
        return "O herói está atacando.";
    }

    defender() {
        return "O herói está se defendendo.";
    }
}

const homemAranha = new Heroi("Peter Parker", 80, 70, 70);
homemAranha.teia = 1;
homemAranha.sentidoAranha = () => `${homemAranha.nome} detectou perigo com seu Sentido Aranha!`;

console.log(homemAranha.nome);
console.log(homemAranha.vida);
console.log(homemAranha.velocidade);
console.log(homemAranha.forca);
console.log(homemAranha.teia);
console.log(homemAranha.sentidoAranha());

const superman = new Heroi("Clark Kent", 200, 100, 150);
superman.podeVoar = 1;
superman.visaoCalor = () => `${superman.nome} está usando sua visão de calor!`;

console.log(superman.nome);
console.log(superman.vida);
console.log(superman.velocidade);
console.log(superman.forca);
console.log(superman.podeVoar);
console.log(superman.visaoCalor());

const batman = new Heroi("Bruce Wayne", 120, 70, 80);
batman.esconder = 1;
batman.investigar = () => `${batman.nome} está investigando um crime.`;

console.log(batman.nome);
console.log(batman.vida);
console.log(batman.velocidade);
console.log(batman.forca);
console.log(batman.esconder);
console.log(batman.investigar());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercicio 2

const dataModificada = () => {
    const dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + 3);
    dataAtual.setMonth(dataAtual.getMonth() + 2);
    dataAtual.setFullYear(dataAtual.getFullYear() + 1);
    return `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
};

console.log(dataModificada());

// Exercicio 3

const converterMoeda = (salario) => {
    const dolar = salario * 0.176;
    const euro = salario * 0.16;

    console.log(dolar.toLocaleString('en', {style: 'currency', currency:'USD'}));

    console.log(euro.toLocaleString('eu', {style: 'currency', currency:'EUR'}));

};

converterMoeda(1000);

// Exercicio 4


const variedade = nome => {
    console.log("Nome em letra maiúscula: " + nome.toUpperCase());
    console.log("Nome em letra minúscula: " + nome.toLowerCase());
    console.log("A quantidade de letras: " + nome.length);
};

variedade("Filipe de Oliveira Lima");



