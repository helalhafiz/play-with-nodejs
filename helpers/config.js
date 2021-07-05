/*
* Title: App Configuration
* Description:
* Author: Helal Hafiz
* Date: 5/7/2021
*/


//Dependencies
const environments = {}



// Staging
environments.staging = {
	port:4000,
	envName:'staging'
}

// Production
environments.production = {
	port:5000,
	envNmae:'production'
}

//determine which environment was passed 
let currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging'
let myenv = currentEnvironment.toString()
//export correspnding env object   

const environmentsToExport = typeof(environments[currentEnvironment]) === 'object' ? 'This is Object' : 'This is not object'









//export module
module.exports = environmentsToExport