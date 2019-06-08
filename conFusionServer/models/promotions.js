const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promoSchema = new Schema({

      name: {
      	type: String,
      	required: true
      },
      image: {
      	type: String,
        required: true
      },
      label: {
      	type: String,
        default: ''
      },
      price: {
      	type: Currency,
        required: true,
        min: 0
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

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;