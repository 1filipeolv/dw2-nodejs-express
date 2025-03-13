// EXERCICIO 1

let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
     "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", 
     "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", 
     "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia","Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

console.log("Exibindo todos os estados brasileiros: ");
estados.forEach((Estados, i) => {
  console.log(`${i + 1} - ${Estados}`);
});

// EXERCICIO 2

const filipe = {
    nome: "Filipe de Oliveira Lima",
    idade: 19,
    cidade: "Registro-SP",
    hobby: "Jogar",
    musicaFavorita: "Não tenho",
}

    console.log(`Meu nome é: ${filipe.nome}.`);
    console.log(`Eu tenho ${filipe.idade} de idade.`);
    console.log(`Eu moro em: ${filipe.cidade}.`);
    console.log(`O meu hobby é: ${filipe.hobby}.`);
    console.log(`Minha musica favorita é: ${filipe.musicaFavorita}.`);

// EXERCICIO 3

const listaFilmes = [
    {
        nome: "Carros",
        genero: "Infantil",
        ano: 2006,
        classificacao: "Livre",

    },
    {
        nome: "Gente Grande 2",
        genero: "Comédia",
        ano: 2013,
        classificacao: "+12",
    },
    {
        nome: "Norbit",
        genero: "Comédia",
        ano: 2007,
        classificacao: "+12",
    },
    {
        nome: "Jumanji",
        genero: "Aventura",
        ano: 2017,
        classificacao: "+12",
    },


];


listaFilmes.forEach(filme =>{
    console.log(`Nome: ${filme.nome}`);
    console.log(`Genêro: ${filme.genero}`);
    console.log(`Ano: ${filme.ano}`);
    console.log(`Classificação: ${filme.classificacao}`);
    
}
)

console.table(listaFilmes);



