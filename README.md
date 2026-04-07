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

 |Campo     |Descrição    |
 |----------|-------------|
 |id | Identificador único|
 |Tipo_Problema| |
 |||
 |||
 |||
 |||

 --- 

 ##  🔗Endpoints

 ### Rota Inicial
 ```http
 GET / 
 ```

 retorna uma pagina html simples com informações da API
```http
 GET /incidentes
 ```
retorna todos os registros do banco de dados

 ```http
 GET / 
 ```
 ```http
 GET / 
 ```
