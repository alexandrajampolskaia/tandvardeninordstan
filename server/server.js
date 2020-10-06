//server.js
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 1238;
const path = require('path')
const bodyParser = require('body-parser');

//MIDDLEWARE
app.use(express.static(path.join(__dirname + '/../build')));

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next()
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


//Start listening to the server 
app.listen(port, console.log("Running port", `${port}`));
