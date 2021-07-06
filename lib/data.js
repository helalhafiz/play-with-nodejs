/*
 * Title: Crud Operations
 * Description: Create, Read, Update and Delete data.
 * Author: Helal Hafiz
 * Date: 6/7/2021
 */

//dependenies
const path = require('path')
const fs = require('fs')

// module scaffolding
const libs = {}


// base directory of the data folder
libs.basdir = path.join(__dirname, '/../.data/')

// Create Data
libs.create = (dir, file, data, callback) => {

	const writingPath = libs.basdir + dir + "/" + file + ".json"
	fs.open(writingPath, 'wx', (err, fileDescriptor) => {
		if (!err) {
			const stringData = JSON.stringify(data)
			fs.writeFile(fileDescriptor, stringData, (err) => {
				if (!err) {
					fs.close(fileDescriptor, (err) => {
						if (!err) {
							callback(false)
						} else {
							callback('File Closing Error!')
						}
					})
				} else {
					callback('Writng Error!')
				}
			})
		} else {
			callback('Could not write. file may already exists!')
		}
	})
}

// Read Data
libs.read = (dir, file, callback) => {

	const readingPath = libs.basdir + dir + '/' + file + '.json'

	fs.readFile(readingPath, 'utf8', (err, data) => {
		callback(err, data)
	})
}

// Update Data
libs.update = (dir, file, data, callback) => {

	const updatingPath = libs.basdir + dir + '/' + file + '.json'

	fs.open(updatingPath, 'r+', (err, fileDescriptor) => {
		if (!err && fileDescriptor) {

			const stringData = JSON.stringify(data)
			fs.ftruncate(fileDescriptor, (err) => {
				if (!err) {
					fs.writeFile(updatingPath, stringData, (err) => {
						if (!err) {
							fs.close(fileDescriptor, (err) => {
								if (!err) {
									callback(false)
								} else {
									callback('Closing Error')
								}
							})
						} else {
							callback('Writing error!')
						}
					})
				} else {
					callback('Trucating Error')
				}
			})
		} else {
			callback('Could not update. file may not exists!')
		}
	})
}

// Delete Data
libs.delete = (dir, file, callback) => {

	const deletingPath = libs.basdir + dir + '/' + file + '.json'

	fs.unlink(deletingPath, (err) => {
		if (!err) {
			callback(false)
		} else {
			callback('Deleting Error')
		}
	})
}


// Exports Modul

module.exports = libs