import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	role: {
		type: String,
		default: "normal"
	},
	contact: String,
	date: {
		type: Date,
		default: Date.now()
	}
});

export default mongoose.model('user', UserSchema);
