// importo express
const express = require(`express`)
const connection = require(`./data/db.js`)

//utilizzo express che ho appena importato
app = express()

//definisco la porta in cui il server si metterà in ascolto
const port = 3000

//definisco la rotta base
app.get("/", (req, res) => {
  res.send(`rotta base del mio server`)
})

//dico al server di rimanere in ascolto sulla porta definita
app.listen(port, () => {
  console.log(`server in ascolto sulla ${port}`)
})

