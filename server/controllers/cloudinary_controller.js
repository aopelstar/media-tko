require('dotenv').config();
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

});

module.exports = {
    getGallery: (req, res) => {
        cloudinary.v2.api.resources({ 
            type: 'upload',
            resource_type: 'video', 
            prefix: 'Video/', 
            max_results: 4 },
        function(error, result){console.log(error)})
        .then( response => res.status(200).send(response) )
    }
}