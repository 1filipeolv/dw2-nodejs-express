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