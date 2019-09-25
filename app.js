const express = require ('express');
const ejs = require  ('ejs');
const request = require ('request');

const app = express();
app.set("view engine","ejs")
var port = process.env.PORT || 3000

app.get("/", (req,res) => {
	res.render("search")
})

app.get('/results', (req,res) =>{
	
	var text = req.query.searchtext;

	request(`http://omdbapi.com/?s=${text}&apikey=922e201c`, (err,response,body) => {
		if (!err && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data : data})
		}
	})
})

app.listen(port, () => {
	console.log('movie app has started')
})

