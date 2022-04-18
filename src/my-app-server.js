const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5035
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
 
app.post('/', function(req, res) {
	let quizScore = Number(req.body.quiz)
	console.log(quizScore)
	let groupScore = Number(req.body.group)
	console.log(groupScore)
	let listeningScore = Number(req.body.listening)
	console.log(listeningScore)
	let projectScore = Number(req.body.project)
	console.log(projectScore)
	let total = quizScore + groupScore + litenstiningScore + projectScore	
	console.log(total)
	let avg = total/4	
	console.log(avg)
	res.send(avg)
})


app.listen(port, () => {console.log(`listening on port ${port}`)})
