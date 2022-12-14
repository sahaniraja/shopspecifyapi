const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());

const dbConnect = mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(()=>{
	app.get('/',(req,res)=>{
        res.send('Backend Connected Successfully!!!! With MONGO')
    })
})


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server running on ${port}`))