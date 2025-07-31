const http = require('http');

const server = http.createServer((request, response) => {
    console.log('efetuado uma requisição');

    // Define o cabeçalho da resposta para indicar que é um HTML em português
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Escreve o conteúdo da resposta
    response.write('<h1>Requisição recebida com sucesso!</h1>');

    // Finaliza a resposta. ESSENCIAL para não deixar o navegador esperando!
    response.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000');
});