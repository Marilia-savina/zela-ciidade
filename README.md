#   🚀 API ZelaCidade
##  📌 Sobre o Projeto
A API **ZelaCidade** foi criada para registrar e gerenciar problemas urbanos, como:

- Buracos 
- Vazamentos 
- lixo
- Iluminação

Essa API nos permite criar, visualizar, atualizar e deletar ocorrencias.

## 🛠️  Tecnologias utilizadas 

- Node.js
- Express
- SQLite
- Postman
- Nodemon

---

##  📦 Instalação

`npm install`

---
##  ▶️ Como Executar
```bash
npm run dev 
```
' http://localhost:3000
'

[clique aqui]( http://localhost:3000
)

--- 
##  🗄️Banco de Dados
 
 o banco de dados é criado automaticamente ao iniciar o projeto
 ```
 database.db
 ```
 ---
 ## 🧾Tabela

 |Campo           |Descrição                |
 |----------------|-------------------------|
 |id              |Identificador único      |
 |Tipo_Problema   |Tipo do problema         |
 |Localização     |Onde ocorreu o problema  |
 |Descrcao        |Detalhes do incidente    |
 |Prioridade      |Baixa, Média, Alta       |
 |Nome_solicitante|Quem registrou           |
 |Data_registro   |Data do registro         |
 |Hora_registro   |Hora do registro         |
 |Stattus_resoucao|Status (Padraõ: Pendente)|

 --- 

 ##  🔗Endpoints

 ### Rota Inicial
 ```http
 GET / 
 ```
 Retorna uma pagina html simples com informações da API

### Rota para listar todos os incidentes
```http
 GET / Incidentes
 ```
Retorna todos os registros do banco de dados

### Rota para buscar um incidente especifíco
 ```http
 GET / Incidentes/:id 
 ```
 Retorna uma ocorreência especifíca

### Rota para criar um novo incidente
 ```http
 POST / Incidentes
 ```
 ### Body (JSON)
```json
{
    "Tipo_problema": "buaraco na calçada",
    "Localizacao": "Rua bartolomeu 219",
    "Descricao": "buraco na calçada atrapalhando pedestres, principalmente os idosos",
    "Prioridade": "Alta",
    "Nome_solicitante": "reynald bold",
    "Data_registro": "01/04/2026",
    "Hora_registro": "10:00"
},
```

---
## Rota para atualizar um incidente
```json
PUT  /Incidentes/:id
```
### Body (JSON)
```json
{
    "Descricao": "Buraco na calçada",
    "Prioridade":"urgente",
    "Status_resolucao":"Em analise"
}
```

---
## Rota para deletar um incidente
```json
DELETE /incidentes/:id
```
## 🔐 
Segurança
A API utiliza `?` nas queries SQL:
```sql
WHERE id = ?
```
Isso evita o SQl injection

----

## O que foi utilizado 

- CRUD (Create, Update e Delete)
- Express
- Sqlite
- sqlite3
- nodemon 
- cors
- Verbos HTTP

---

##  👩‍💻 Projeto Educacional 

Este projeto foi desenvolvido para fins de aprensizado em back-end com Node.js