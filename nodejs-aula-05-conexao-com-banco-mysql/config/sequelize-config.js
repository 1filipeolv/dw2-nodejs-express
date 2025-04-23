// Importando o Sequelize
import Sequelize  from "sequelize";

// Criando os dados de conexao com o banco de dados
const connection = new Sequelize ({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    // Comente a linha na primeira execução do projeto
    database: "sistemaLoja",
    timezone: "-03:00",
})
export default connection;