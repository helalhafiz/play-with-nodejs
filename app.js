/*
* Title: Umega
* Description: a url monitoring application
* Author: Helal Hafiz
* Date: 7/4/2021
*/

// Dependencies
const http = require('http')
const {handleReqRes} = require('./helpers/reqres')
const environment = require('./helpers/config')
// App object - module scaffolding

const app = {};

// App Configuration

app.config = {
	port:3000
}

//hamza
console.log(environment)

// Create Server
app.createServer = ()=>{
	const server = http.createServer(app.handleReqRes)
	server.listen(app.config.port,()=>{
		
		console.log(`Server Listening on Port ${app.config.port}`)
	})
}


//Handle Req and Response

 app.handleReqRes = handleReqRes

//Start Server
app.createServer()

