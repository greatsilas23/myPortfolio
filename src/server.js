const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended:false}))
app.post("/", (req, res) => {
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    let result = Number(num1 + num2)
    res.status(204).send("Result is" + Number(result))
    console.log(result)
})

app.listen(port, () => console.log(`listening on port ${port}`))