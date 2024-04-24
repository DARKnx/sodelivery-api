import storeModel from "../../models/store.js";

export default class Service {

    async get(){
        try {
			return await storeModel.find().sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async create(data){
        try {
			const store = new storeModel(data);
            await store.save();
            return store;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async update({ data, id }){
        try {
		    const store = await storeModel.findById(id);
			if (!store) return { error: "address_not_found" };
            const newStore = await storeModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
			return newStore;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
			const store = await storeModel.findById(id);
		    if (!store) return { error: "address_not_found" };
		    await storeModel.findByIdAndDelete(id);
			return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}