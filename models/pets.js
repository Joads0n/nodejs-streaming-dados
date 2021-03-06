const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res){
        const query = 'INSERT INTO Pets SET ?'

        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro){
                res.status(400).json({erro})
            } else {
                const novoPet = {
                    nome: pet.nome,
                    imagem: novoCaminho
                }

                conexao.query(query, novoPet, err => {
                    if(err){
                        console.log(err)
                        res.status(400).json(err)
                    } else {
                        console.log(novoPet)
                        res.status(200).json(novoPet)
                    }
                })
            }        
        })
    }
}

module.exports = new Pet()