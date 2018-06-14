const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cloudinary_cont = require('./controllers/cloudinary_controller');
const cors = require('cors');
require('dotenv').config();

// server creation
const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// cloudinary endpoints
app.get('/api/videos', cloudinary_cont.getGallery)

// port stuff
const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})