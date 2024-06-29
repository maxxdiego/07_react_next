const express = require('express')
const app = express()
// Testar conexão com banco de dados
// const db = require("./db/models")

// Importando controllers
const home = require("./controllers/home")
const contactMessage = require("./controllers/contactMessage")

// Criando as rotas
app.use('/home', home)
app.use('/contact-message', contactMessage)

const port = 8080
app.listen(port, error => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`)
    } else {
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})