//importo mysql2
const mysql = require(`mysql2`)

//creo la connessione
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db-movies"
})

//stabilisco la connessione al database
connection.connect((err) => {
  if (err) {
    console.log(`errore di connessione al database: ${err}`)
  }
    else { console.log(`connessione al database riuscita`) }
})

module.exports = connection