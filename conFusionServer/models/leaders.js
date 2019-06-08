const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leaderSchema = new Schema({

      name: {
      	type: String,
      	required: true
      },
      image: {
      	type: String,
        required: true
      },
      designation: {
      	type: String,
        required: true
      },
      abbr: {
      	type: String,
        required: true
      },
      description: {
      	type: String,
        default: ''
      },
      featured: {
      	type: Boolean,
      	default: false
      }
  },{
  	 timestamps: true
});

var Leaders = mongoose.model('leader', leaderSchema);

module.exports = Leaders;