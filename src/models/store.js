import mongoose from 'mongoose';

const StoreSchema = new mongoose.Schema({
    name: String,
    responsible: String,
    products: [
      {
        name: String,
        id: String
      }
    ],
    store: String,
    date: {
		type: Date,
		default: Date.now()
	}
});

export default mongoose.model('store', StoreSchema);
