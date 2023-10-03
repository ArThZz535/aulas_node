const express = require("express") //importar express

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja bem vindo a hornet e seu escape")
})

app.listen(3000, () => {
    console.log("Escape de hornet rodando na porta 3000")
})

//https://localhost:3000  