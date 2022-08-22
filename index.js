const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Backend Connected Successfully!!!!')
})


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server running on ${port}`));