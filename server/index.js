const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cloudinary_cont = require('./controllers/cloudinary_controller');
const cors = require('cors');
const nodemailer = require('nodemailer')
require('dotenv').config();

// server creation
const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// cloudinary endpoints
app.get('/api/videos', cloudinary_cont.getGallery)

//nodemailer shtuff
app.post('/api/sendEmail', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "login",
                user: process.env.MY_EMAIL,
                pass: process.env.MY_LOCK
            }
        });

        let mailOptions = {
            from: `${req.body.name} <${req.body.from}>`, 
            to: process.env.MY_EMAIL,
            subject: "website communication", 
            html:`<div><p> Email: ${req.body.from}<br/><br/>${req.body.message}</p></div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send('done')
        });
    });
})


// port stuff
const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})