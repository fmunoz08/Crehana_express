const mongoose = require('mongoose');
const Schema = mongoose.Schema


//nombre
//dueño
//fecha
//tipo gato - perro - hamster - ave 

const Profesional = new Schema({
    name: { type: String, required:true },
    secondName: { type: String, required:true },
    email: { type: String, unique: true, required: true},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    schedule: [{
        date: { type: String},
        hour: { type: String},
        available: { type: Boolean}
    }]
});

module.exports = mongoose.model('Profesional', Profesional);