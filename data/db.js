//importo mysql2
const mysql = require(`mysql2`)

//creo la connessione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

//stabilisco la connessione al database
connection.connect((err) => {
  if (err) {
    console.log(`errore di connessione al database: ${err}`)
  }
    else { console.log(`connessione al database riuscita`) }
})

module.exports = connection