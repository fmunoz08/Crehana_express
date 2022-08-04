const express = require('express');
const router = express.Router();
const profesional = require('../controller/profesional');

router.get('/', function(req, res){
    profesional.list(req, res)
})

router.get('/:id', function(req, res){
    profesional.byId(req, res)
})

router.post('/', function(req, res){
    profesional.create(req, res)
})

router.put('/:id', function(req, res){
    profesional.update(req, res)
})
module.exports = router;
