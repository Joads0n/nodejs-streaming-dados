class Tabelas{
    init(conexao){
        this.conexao = conexao;

        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente varchar(60) NOT NULL, pet varchar(30), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacao text, PRIMARY KEY(ID))';

        this.conexao.query(sql, err => {
            if(err){
                console.log(err);
            } else {
                console.log('Tabela Atendimentos criada com sucesso');
            }
        })
    }

    criarPets(){
        const query = 
        'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200), PRIMARY KEY (id))'
        this.conexao.query(query, (err, ) => {
            if(err){
                console.log(err)
            } else {
                console.log('Tabela Pet foi criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas