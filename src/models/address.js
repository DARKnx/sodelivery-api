import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
	name: String,
	cep: Number,
	cityAndState: String, 
	neighborhood: String,
	road: String,
	complement: String,
	Number: String
});

export default mongoose.model('address', AddressSchema);
