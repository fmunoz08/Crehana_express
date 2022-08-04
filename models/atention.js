const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Profesional = require('./profesional')


//nombre
//dueño
//fecha
//tipo gato - perro - hamster - ave 



const slotSchema = new Schema ({
    slot_time: String,
    slot_date: String,
    created_at: Date
  });

const Slot = mongoose.model('Slot', slotSchema);

const Atention = new Schema({
    pet_name: { type: String, required:true },
    type: {type: String, required:true},
    owner: {
        name: { type: String, required: true},
        email: { type: String, required: true},
        phone: { type: String, required: true}
    },
    profesional: {
        id: { type: String , required:true }
    },
    slots:{type: Schema.Types.ObjectId, ref: Slot},
    createdAt:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Atention', Atention);