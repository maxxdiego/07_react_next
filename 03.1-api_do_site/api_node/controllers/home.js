const express = require('express')
const router = express.Router()

// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models')

// Endpoint /home
router.get("/", async (req, res) => {
    // Recuperar o registro do banco de dados da tabela HomesTops
    const homesTops = await db.HomesTops.findOne({
        // Indicar quais colunas recuperar
        attributes: ['titleOneTop', 'titleTwoTop', 'titleThreeTop', 'linkBtnTop', 'textBtnTop', 'imageTop'],

        // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
        // where: { id : 100 }
    })

        // Recuperar o registro do banco de dados da tabela HomesServices
        const homesServices = await db.HomesServices.findOne({
            // Indicar quais colunas recuperar
            attributes: ['servTitle', 'servIconOne', 'servTitleOne', 'servDescOne', 'servIconTwo', 'servTitleTwo', 'servDescTwo', 'servIconThree', 'servTitleThree', 'servDescThree'],
    
            // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
            // where: { id : 100 }
        })

    // Acessa o IF se encontrar o registro no banco de dados
    if((homesTops) && (homesServices)) {
        return res.json({
            error: false,
            homesTops,
            homesServices,
        })
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Não encontrado o conteúdo da página home do site!"
        })
    }
})

module.exports = router