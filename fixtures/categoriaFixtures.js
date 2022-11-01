const {executarNoBanco} = require('../connection');

for(let x = 1; x <= 100; x++) {
    let query = `INSERT INTO  tb_categoria (nome, descricao) VALUES ('Catrgoria Teste', 'Descricao da categoria teste'); `

    executarNoBanco(query);
}


// process.exit(0);