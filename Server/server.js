const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//Dotenv
dotenv.config();

//Reset Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.get('',(req,res => {
    res.statusCode(200).json({
        success:"Welcome to UniTunes app",
    });
}));

//Port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT,() => {
    console.log('Server Running ${PORT}'.bgGreen.white)
})