const fs = require('fs');
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoValido){
        const novoCaminho = `./assets/image/${nomeDoArquivo}${tipo}`
        
        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = 'Tipo de arquivo inválido'
        console.log('Erro! Tipo de arquivo inválido')
        callbackImagemCriada(erro)
    }
}