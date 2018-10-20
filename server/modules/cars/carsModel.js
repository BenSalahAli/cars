var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carsSchema = new Schema({
	'door' : String,
	'color' : String,
	'name' : String,
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	}
});


module.exports = mongoose.model('cars', carsSchema);
