/*
* Title: Handle Req Res
* Description: Handling the user Requests and Respons
* Author: Helal Hafiz
* Date:
*/


// Dependencies
const url  = require('url')
const {StringDecoder}   = require('string_decoder')
const routes = require('../routes')
const {notFoundHandler} = require('../routesHandlers/404')

// modul scaffolding
const handler = {}



handler.handleReqRes =(req,res)=>{

	const parsedUrl= url.parse(req.url,true)
	const path 	   = parsedUrl.pathname
	const trimmedUrl = path.replace(/^\/+|\/+$/g,'')
	const method   = req.method.toLowerCase()
	const queryStrings= parsedUrl.query
	const headersObject= req.headers

	const requestProperties = {
		parsedUrl,
		path,
		trimmedUrl,
		method,
		queryStrings,
		headersObject
	}

	const choosenHandler = routes[trimmedUrl] ? routes[trimmedUrl] : notFoundHandler
	
	choosenHandler(requestProperties,(statusCode,payload)=>{
		statusCode = typeof(statusCode) === 'number' ? statusCode : 500

		payload   = typeof(payload) === 'object' ? payload : {}

		const payloadString = JSON.stringify(payload)

		res.writeHead(statusCode)
		res.end(payloadString)

	})
	
	res.end()



}



module.exports = handler



