// importo express
const express = require(`express`)

//importo cors
const cors = require('cors')

//utilizzo express che ho appena importato
const app = express()

//definisco la porta in cui il server si metterà in ascolto
const port = 3000

//importo il router
const movieRouter = require(`./routers/movieRouter`)

app.use(cors())

//definisco la rotta base
app.get("/", (req, res) => {
  res.send(`rotta base del mio server`)
})

//definisco le rotte per i film
app.use("/api/movies", movieRouter)

//dico al server di rimanere in ascolto sulla porta definita
app.listen(port, () => {
  console.log(`server in ascolto sulla ${port}`)
})

