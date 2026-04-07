const express = require ('express')
const {criarBanco} = require('./database')


const app = express()
app.use(express.json())

app.get('/', (req,res) => {
res.send(`
    <body>
    <h1> ZelaCidade </h1>
    <h2> Gestão de Problemas urbnos </h2>
    <p> Endpoint que leva aos incidentes cadastrados: /incidentes 
    </body>
    <p> Endpoint que leva a um incidente especifico: /Nº do id
    `)
})

const PORT = 3000
app.listen(PORT, () => {
console.log(`servidor rodando em http://localhost:${PORT}`)
})

// rota de listagem - para buscar todos os problemas registrados
//get 

app.get('/Incidentes', async (req,res) => {
const db = await criarBanco()  //chamamos a função dos arquio. o await é o "aguarde" pois o banco de ados precisa de tempo pra abrir
const listaIncidentes = await db.all(`
    SELECT * FROM Incidentes 
    `)
    res.json(listaIncidentes)

})

//rota para buscar um incidente especifico
app.get ('/Incidentes/:id', async (req,res) => {
    const {id} = req.params
    const db = await criarBanco()
    const incidenteEspecifico = await db.all(`
        SELECT * FROM Incidentes
        WHERE id = ?`, [id])
        res.json(incidenteEspecifico)
})


// rota para realizar um novo registro 
//post
app.post ('/Incidentes', async (req,res) => {
console.log (req.body)

    const {Tipo_problema, Localizacao, Descricao, Prioridade, Nome_solicitante, Data_registro, Hora_registro} = req.body
    const db = await criarBanco()
    await db.run(`INSERT INTO Incidentes(Tipo_problema, Localizacao, Descricao, Prioridade, Nome_solicitante, Data_registro, Hora_registro) VALUES (?, ?, ?, ?, ?, ?, ? )`, [Tipo_problema, Localizacao, Descricao, Prioridade, Nome_solicitante, Data_registro, Hora_registro])
    res.send (`Incidente novo registrado  ${Tipo_problema} registrado na data ${Data_registro} por ${Nome_solicitante}`)
})

//  rota de atualização 
//  put
//  .run EXECUTA 
app.put('/Incidentes/:id', async (req,res) => {
const {id} = req.params
const {Descricao, Prioridade,Status_resolucao} = req.body
const db = await criarBanco()
await db.run(`
    UPDATE Incidentes
    SET Descricao = ?, Prioridade = ?, Status_resolucao= ?
    WHERE id = ?` , [Descricao, Prioridade, Status_resolucao, id])
    res.send(`o incidente ${id} foi atualizado com sucesso`)

})

// rota de remoçao 
//delete
app.delete('/Incidentes/:id', async (req,res) => {
const {id} =req.params
const db = await criarBanco()
await db.run(`
    DELETE FROM Incidentes
    WHERE id = ?`,[id])
    res.send(`o incidente de ${id} foi removido com sucesso`)
})

