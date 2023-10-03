const express = require("express") //importar express
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Escape de hornet rodando na porta 3000")
})

//https://localhost:3000  