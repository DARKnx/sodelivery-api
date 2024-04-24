import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    cep: Number,
    all: String
});

export default mongoose.model('address', AddressSchema);
