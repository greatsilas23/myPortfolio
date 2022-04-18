const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.use(bodyParser.urlencoded({
    extended: true
}))

app.post("/", function(req, res){
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 + num2
})

app.post('/', (req, res) => {
	let dailyChallenge = Math.floor(Math.random(9))
	let gold = 70
	let silver = 50 
	let bronze = 20
	let scholar = dailyChallenge * 10
	let subTotal = 0
	let bakshishi = 1
	switch(bodyParser(req.body.XP)){	
		case (req.body.XP.gold === true):
			subTotal += gold
			break
		case (req.body.XP.silver === true):
			subTotal += silver
			break
		case (req.body.XP.bronze === true):
			subTotal += bronze
			break
		case (req.body.XP.scholar === true):
			subTotal += scholar
			break
		default:
			subTotal += bakshishi
			break
	}
	console.log(Number(subTotal))
	res.status(201).send(Number(subTotal))
})
app.listen(port, () => console.log(`Listening on port ${port}`))
