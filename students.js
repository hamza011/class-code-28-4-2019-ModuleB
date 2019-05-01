const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({message: "Welcome from Students"});
    console.log(`URL ==> ${req.url}`);
})

router.get("/add/:name", (req, res)=>{
    res.send({message: `${req.params.name} is Added as Student`});
    console.log(`URL ==> ${req.url}`);
})

module.exports = router;
