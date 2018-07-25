import React from 'react';
import './splash.css';
import Video from '../video/Video';
import { Link } from 'react-router-dom';

export default function Splash(){
    return(
        <div className="splash-main">
            <Video />
            <img src="https://res.cloudinary.com/media-tko/image/upload/v1528257711/logos/tko_tagline_gold.png" alt="logo" className="splash-logo" />
            <div className="splash-button-container">
               <Link to='/about'> <button className="splash-button">Get It</button></Link>
            </div>
        </div>
    )
}