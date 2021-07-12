/*
* Title: Routes 
* Description: Hanlde the applications Routes
* Author: Helal Hafiz
* Date:
*/

//Dependencieas
const {sampleHandler} = require('./routesHandlers/sampleHandlers')
const {userHandler} = require('./routesHandlers/userHandler')

//Module Scaffolding

const routes = {
	sample:sampleHandler,
	user:userHandler
}



module.exports = routes