const express = require('express');
const router = express.Router();
const Module = require('../model/postModel');


router.post('/add', (req, res) => {
    console.log(req.body);
    new Module(req.body).save()

    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;