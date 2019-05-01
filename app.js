const express = require('express');
const app = express();
const port = 3000;
const studentModule = require('./students');
const teacherModule = require('./teachers');

app.use((req, res, next) => {
    console.log("---- LOGGER ----");
    console.log("Logger MiddleWare: ", req.url);
    next();
})

app.use("/students", studentModule);

app.use("/teachers", teacherModule);

app.get("/", (req, res) => {
    res.send({ status: true, message: "Welcome from App" });
})


app.listen(port, () => { console.log(`App listening on ${port}`) })