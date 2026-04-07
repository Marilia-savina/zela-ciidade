const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {
    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database
    })

    //--CRIANDO AS COLUNAS DA TABELA
    await db.exec(`
    CREATE TABLE IF NOT EXISTS Incidentes(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     Tipo_problema TEXT,
     Localizacao TEXT,
     Descricao TEXT,
     Prioridade TEXT,
     Nome_solicitante TEXT,
     Data_registro TEXT,
     Hora_registro TEXT,
     Status_resolucao TEXT DEFAULT 'PENDENTE')
    `)
    console.log("banco de dados e tabelas prontos!!!!")

    //--Insert c do crud CREATE

    const checagem = await db.get(`SELECT COUNT (*) AS Total FROM Incidentes`)
    if (checagem.Total === 0) {
        await db.exec(`
    INSERT INTO Incidentes (Tipo_problema, Localizacao, Descricao, Prioridade, Nome_solicitante, Data_registro, Hora_registro) VALUES
    ('Iluminação' ,' Ruas das flores 123 bairro dos verdes' , ' Poste queimado ha dias' ,' Média' ,'Ana Clara' , '16/07/2026' , ' 10:43' ),
    ('Falta de água' , ' Rua T, 146, Jardim Imbarie' , ' Moradores sem água' , ' Alta' , ' Dona Fofoca' , '16/03/2026' , ' 10:00' ),
    ('Falta de Energia' , ' São Paulo (SP)' , ' Poste Queimado' , ' Média' , ' Ana Clara Roma' , '18/03/2026' , ' 18:00' ),
    ('Falta de água' , ' Rua conceiçao, 166, Jardim clemente' , ' Moradores sem água há uns 4 dias' , ' Alta' , ' Dona Fofoca' , '16/03/2026' , '10:00' ),
    ('Pavimentação' ,' Avenida C, Bairro D' , ' Calçada em mau estado' ,' Alta' ,' Maria Oliveira' , '14/03/2026' ,'14:30' ),
    ('Acúmulo de lixo', 'ministo silva, 453', 'lixo entulhado obstruindo a via', 'Média', 'joana saraiva', '17/03/2026', '16:20'),
    ('bueiro emtupido', 'rua bentivi, 362', 'bueiro transbordando, cheiro forte de esgoto', 'Alta', 'roberto silva', '13/03/2026', '13:40'),
    ('Semáforo queimado', 'avenida das américas,643', 'semaforo não esta funcionando dificutando a travessia do pedestre', 'Média', 'rafael gustavo', '14/03/2026', '12:50'),
    ('Cobrança de estacionamento indevida', 'rua custodio rufino, 243', 'flanelinha cobrando estacionamento em rua pública', 'Média', 'lucas souza', '16/03/2026', '11:26'),
    ('mobilidade urbana', 'rua marechal hermes,126 ', 'frota de onibus paralizada linhas 432,453 e outros não passan no ponto, ', 'Alta', 'augusto lira', '19/03/2026', '14:35'),
    ('Queimada', 'olavo bilack,428 ', 'lixo sendo queimado proximo a mata', 'urgente', 'pedro nicolas', '15/03/2026', '08:45')
    `)
    } else {
        console.log(`Banco pronto com ${checagem.Total} de Incidentes`)
    }

    //--Select r do crud READ

    // const todosOsIncidentes = await db.all(`
    //     SELECT * FROM Incidentes
    //     `)
    // console.table(todosOsIncidentes)


    // // SELECT ESPECÍFICO

    // const chamadoAna = await db.all(`
    // SELECT * FROM Incidentes 
    // WHERE  Nome_Solicitante = 'Ana Clara'
    // `)
    // console.table(chamadoAna)

    // //--updade u do crud UPDATE
    // await db.run(`
    // UPDATE Incidentes
    // SET Status_Resolução = 'Em Análise'
    // WHERE  Data_Registro = '16/03/2026'
    // `)
    // console.log('Todas as reclamações do dia 16/03/2026 tiveram uma atualização')

    // //--delete d do crud DELETE
    // await db.run(`
    // UPDATE Incidentes 
    // SET Status_Resolução = 'resolvido'
    // WHERE Tipo_Problema = 'Iluminação'
    // `)
    // console.log ('Problema poste queimado resolvido') 

    return db
}
   


module.exports ={criarBanco}