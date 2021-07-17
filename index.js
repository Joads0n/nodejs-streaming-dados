const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/database/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');

conexao.connect(err => {
    if(err){
        console.log(err)
    } else {
        console.log('Conexão com MySQL estabelecida');

        Tabelas.init(conexao)

        const app = customExpress();
        
        app.listen(3000, () => {
            console.log('SERVER ON');
        })
    }
});