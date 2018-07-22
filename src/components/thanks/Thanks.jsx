import React from 'react';
import './thanks.css';
import Head from '../head/Head';
import { Link } from 'react-router-dom';

export default function thanks(){
    return(
        <div className="thanks-main">
            <Head />
            <div className="thanks-container">
                Thank you!  
            </div>
                <div className="thanks-text">
                We have received your email and we will get back to you very soon<br/>
                <br/>In the mean time, you can head back and checkout more of our sweet vids
                </div>
                <div className="thanks-button-container"><Link to="/work"><button className="thanks-button">Back to Work</button></Link></div>
        </div>
    )
}