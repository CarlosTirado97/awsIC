const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hola GET")
})

app.listen(3000, (err) => {
    if (err) return console.log(err)

    console.log("Corriendo en el puerto 3000")
})
