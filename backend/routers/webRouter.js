const express = require('express');
const router = express.Router();
const Model = require('../model/webpageModel');
const verifyToken = require('./verifyToken');


router.post('/add', verifyToken, (req, res) => {
    req.body.user = req.user._id;
    new Model(req.body).save()

        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    // console.log(req.body);
    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyuser', verifyToken, (req, res) => {
    // console.log(req.body);
    Model.find({user: req.user._id})
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyowner/:id', (req, res) => {
    // console.log(req.body);
    Model.find({user: req.params.id})
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getpages/:id', (req, res) => {
    // console.log(req.body);
    Model.find({user: req.params.id})
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err);
            res.json(err)
        });
});

router.get("/getbyid/:id",(req,res)=>{

    Model.findById(req.params.id)

    .then((result)=>{
        res.json(result);

    }).catch((err)=>{
        console.error(err)
        res.status(500).json(err);
    });
});

router.put("/update/:id",(req, res)=>{

    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})

    .then((result)=> {
        res.json(result);
    }).catch((err)=>{
        console.error(err)
        res.status(500).json(err);
    });
});

module.exports = router;