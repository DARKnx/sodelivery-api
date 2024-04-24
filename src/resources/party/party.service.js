import partyModel from "../../models/party.js";

export default class Service {

    async get(){
        try {
			return await partyModel.find().sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async create(data){
        try {
			const party = new partyModel(data);
            await party.save();
            return party;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    async update({ data, id }){
        try {
		    const party = await partyModel.findById(id);
			if (!party) return { error: "address_not_found" };
            const newParty = await partyModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
			return newParty;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
			const party = await partyModel.findById(id);
		    if (!party) return { error: "address_not_found" };
		    await partyModel.findByIdAndDelete(id);
			return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

}