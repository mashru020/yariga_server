import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true},
    desctiption: { type: String, required: true},
    propertyType: { type: String, required: true},
    location: { type: String, required: true},
    price: { type: Number, requried: true},
    photo: { type: String, required: true},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const porpertyModel = mongoose.model('Property', PropertySchema);

export default porpertyModel;