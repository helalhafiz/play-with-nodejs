/*
* Title: 
* Description:
* Author: Helal Hafiz
* Date:
*/


//Dependencies


//Module Scaffolding
const handler = {}


handler.notFoundHandler = (requestProperties,callback)=>{
	console.log(requestProperties)

	callback(404,{message:'404 Not Found'})
}



module.exports = handler