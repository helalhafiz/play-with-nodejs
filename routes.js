/*
* Title: Routes
* Description: Hanlde the applications Routes
* Author: Helal Hafiz
* Date:
*/

//Dependencieas
const {sampleHandler} = require('./routesHandlers/sampleHandlers')

//Module Scaffolding

const routes = {
	sample:sampleHandler
}



module.exports = routes