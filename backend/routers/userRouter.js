const express = require('express');
const router = express.Router();
const Model = require('../model/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');


router.post('/add', (req, res) => {
    console.log(req.body);
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

router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        //match that email and password exists aur match with database
        .then((result) => {
            if (result)
            //  res.status(200).json(result)
            {
                const payload = { _id: result._id, email: result.email, role: result.role };

                //create jwt token
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '3 days'
                    },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token: token, avatar: result.avatar });
                        }
                    }
                )
            }
            else res.status(401).json({ message: 'login failed' })

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;