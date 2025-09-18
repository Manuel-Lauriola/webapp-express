//importo express
const express = require(`express`)

//importo il router
const router = express.Router()

//il controller
const movieController = require("../controllers/movieController.js")

//definisco le rotte
router.get('/', movieController.index)
router.get('/:id', movieController.show)

module.exports = router