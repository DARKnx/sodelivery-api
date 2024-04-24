import addressModel from "../../models/address.js";

export default class Service {

    async get(){
        try {
			return await addressModel.find().sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async create(data){
        try {
			const address = new addressModel(data);
            await address.save();
            return address;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async update({ data, id }){
        try {
		    const address = await addressModel.findById(id);
			if (!address) return { error: "address_not_found" };
            const newAddress = await addressModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
			return newAddress;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
			const address = await addressModel.findById(id);
		    if (!address) return { error: "address_not_found" };
		    await addressModel.findByIdAndDelete(id);
			return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}