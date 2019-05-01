const express = require('express');
const router = express.Router();
const studentsModule = require('./students');

// router.use("/students", studentsModule);

router.get("/", (req, res)=>{
    res.send({message: "Welcome from Teachers"});
})

router.get("/add/:name", (req, res)=>{
    res.send({message: `${req.params.name} is Added as Teacher`});
})

// student = {
//     name: String,
//     age: Number,
//     email: String
// }

module.exports = router;