const EventEmitter = require('events')

class School extends EventEmitter{

	startClass(){
		setTimeout(()=>this.emit('first'),2000)
		setTimeout(()=>this.emit('second'),4000)
		setTimeout(()=>this.emit('third'),6000)
		setTimeout(()=>this.emit('fourth'),8000)
	}

}


module.exports = School