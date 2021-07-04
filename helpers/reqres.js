/*
* Title: Handle Req Res
* Description: Handling the user Requests and Respons
* Author: Helal Hafiz
* Date:
*/


// Dependencies
const url  = require('url')
const {StringDecoder}   = require('string_decoder')

// modul scaffolding
const handler = {}



handler.handleReqRes =(req,res)=>{

	const parsedUrl= url.parse(req.url,true)
	const path 	   = parsedUrl.pathname
	const trimmedUrl = path.replace(/^\/+|\/+$/g,'')
	const method   = req.method.toLowerCase()
	const queryStrings= parsedUrl.query
	const headersObject= req.headers

	const decoder = new StringDecoder()
	let realData  = '';
	
	req.on('data',(data)=>{
		realData += decoder.write(data)
	})
	req.on('end',()=>{

		decoder.end()
		console.log(realData)
		res.end()
	})
}



module.exports = handler



