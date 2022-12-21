// user database operations

const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

// route or endpoint
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);    
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    Model.find({email : req.params.email})
    .then((result) => {
        console.log(result);
        res.json(result);    
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);    
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})
router.post('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);

        if(result) {
            console.log('Login Success');
            res.json(result);
        } else {
            console.log('Login Failed');
            res.status(400).json({status: 'Login Failed'});
        }

    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    })
})

module.exports = router;