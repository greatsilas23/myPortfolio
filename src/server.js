const express = require('express')
const { Client } = require('pg')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const client = new Client({
	user: 'root',
	host: 'localhost',
	database: 'demo',
	password: 'secret',
	port: '5432'
})
client.connect(function(err) {
	if(err) throw err
	console.log("Connected!")
})
app.use(bodyParser.urlencoded({extended:false}))


app.post('/', (req, res) => {
	console.log(req.body.quiz)
	console.log(req.body.group)
	client.query(`INSERT INTO quiz(name, quiz, groupscore) VALUES ('user', '${req.body.quiz}' , '${req.body.group}');`) 
})

app.listen(port, () => console.log(`listening on port ${port}`))
