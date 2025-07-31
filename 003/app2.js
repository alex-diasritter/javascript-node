const fs = require('fs');

fs.readFile('./dados.csv', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:\n', data.toString());
})

//essa aparece primeiro, pois é executado em outra thread
console.log('Primeira operação');