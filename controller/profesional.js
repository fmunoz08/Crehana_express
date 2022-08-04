
const Profesional = require('../models/profesional')
const mongoose = require('mongoose')

exports.create = function(req, res) {
    let newProfesional = new Profesional(req.body);
    newProfesional.save(function(err , profesional) {
        if (err) {
            return res.status(400).send({message: "no se pudo crear registro"})
        }
        return res.status(201).send({profesional});
    })
}


exports.update = function(req, res) {
    console.log(req.body)
    res.status(200).send({message: "Hola Mundo!"})
}