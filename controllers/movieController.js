//importo la connessione al database
const connection = require(`../data/db.js`)

//definisco la index sulla sua rotta
const index = (req, res) => {
  const sql = "SELECT * FROM movies"

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({
      error: `errore nell'esecuzione della query : ${err}`
    })
    res.send(results)
  })
}

//definisco la show sulla sua rotta
const show = (req, res) => {
  console.log(`show`)
}

module.exports = {
  index,
  show
}