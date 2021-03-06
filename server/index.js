const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cloudinary_cont = require('./controllers/cloudinary_controller');
const cors = require('cors');
require('dotenv').config();

// server creation
const app = express();
app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

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
            from: `${req.body.name} <${req.body.email}>`, 
            to: process.env.MY_EMAIL,
            subject: "website email", 
            html:`<div><p> 
            This is an automated Email from your website.  Someone is trying to connect with you: <br/>
            <br/>Name: ${req.body.name}<br/>
            <br/>Email: ${req.body.email}<br/>
            <br/>Telephone: ${req.body.telephone}<br/>
            <br/>Message: ${req.body.message}</p></div>`
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