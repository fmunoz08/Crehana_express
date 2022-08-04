
const Atention = require('../models/atention')
const mongoose = require('mongoose')

exports.create = function(req, res) {
    let newAtention = new Atention(req.body);
    newAtention.save(function(err , atention) {
        if (err) {
            res.status(400).send({message: "no se pudo crear registro"})
        }
        return res.status(201).send({atention});
    })
}

exports.list = function(req, res) {
    console.log("Searching All atentions");
    Atention.find({}).exec( function (err, atention) { 
        if (err) {
            return res.status(200).send({ message: err})
        }
        return res.status(200).send({atention})
    })
}

exports.byId = function(req, res) {
    const atentionId = mongoose.Types.ObjectId.isValid(req.body.id) ? req.body.id : null;
    console.log("Searching atentions with id ", atentionId);
    Atention.findById(atentionId).exec( function (err, atention) { 
        if (err || atention === null) {
            const message = atention === null ? 'No hay registros en la base de datos' : "Error al buscar registros" ;
            return res.status(500).send({ message })
        }
        if(atention) {
            return res.status(200).send({atention})
        }
        
    })
}