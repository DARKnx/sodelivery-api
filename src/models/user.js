import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	role: String,
	contact: String
});

export default mongoose.model('user', UserSchema);
