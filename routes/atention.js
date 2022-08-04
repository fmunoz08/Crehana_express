const express = require('express');
const router = express.Router();
const atention = require('../controller/atention');

router.get('/', function(req, res){
    atention.list(req, res)
})

router.get('/:id', function(req, res){
    atention.byId(req, res)
})

router.post('/', function(req, res){
    atention.create(req, res)
})

router.put('/:id', function(req, res){
    atention.update(req, res)
})

module.exports = router;
