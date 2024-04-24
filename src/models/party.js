import mongoose from 'mongoose';

const PartySchema = new mongoose.Schema({
	name: String,
	responsible: String,
	products: [
	  {
		name: String,
		id: String
	  }
	],
	orders: [
		{
		name: String,
		id: String,
		size: Number
		}
	],
	address: {
	  cep: Number,
	  all: String
	},
	deliveryTime: Date,
	partyTime: Date
});

export default mongoose.model('party', PartySchema);
