/*
 * Title: User Handler
 * Description: Handle user requests
 * Author: Helal Hafiz
 * Date: 6/7/2021
 */

// Dependencies



// Modul Scaffolidng
const handler = {}


handler.userHandler = (requestProperties, callback) => {

	const acceptedMetods = ['get', 'post', 'put', 'delete']
	if (acceptedMetods.indexOf(requestProperties.method) > -1) {
		
	} else {
		callback(405, {
			message: 'Bed Request!'
		})
	}

}


// Handle Requests
handler._users = {}


handler._users.post = (requestProperties,callback)=>{

}

module.exports = handler