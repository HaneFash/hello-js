const express = require('express');
const app = express ();
require("dotenv").config();
const PORT = process.env.port || 3000;
app.use(express.json());

 app.post('/user', (req, res) => {
    console.log(req.body);
   const {name, email} = req.body;
   console.log(`Hello ${name}!`);
   if (!name || !email) {
    return res.status(400).send('name required!'); 
   } 
    res.json({ message: `Hello ${name}!`});
});

app.get('/', (req, res) => {
    res.send('My week 2 API!');
});

app.get('/user/:id', (req, res) => {
    const userId =  req.params.id;
     console.log(`User ${userId} profile`);
     res.send(`User ${userId} profile`);
});

app.listen(PORT, () => {
console.log(`Example app listening on port ${PORT}`);
});