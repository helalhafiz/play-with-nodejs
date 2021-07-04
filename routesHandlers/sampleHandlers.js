/*
* Title: Sampel Handler
* Description:
* Author: Helal Hafiz
* Date:
*/


//Dependencies



//Module Scaffolding
const handler = {}


handler.sampleHandler = (requestProperties,callback) =>{
	console.log(requestProperties)
	callback(200,{message:'This a sample url'})
}


module.exports = handler