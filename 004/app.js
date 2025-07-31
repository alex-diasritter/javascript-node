const fs = require('fs')

//cria pasta
fs.mkdirSync('logger')

fs.mkdirSync('logs/4', err => {
    if (err) {
        console.error('Error creating directory:', err)
    }
})

console.log('Fim')

