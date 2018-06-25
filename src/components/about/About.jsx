import React from 'react';
import './about.css';
import Head from '../head/Head'

export default function about() {
    return (
        <div>
            <Head />
            <div className="about-head">
                <div className="about-container">

                    <div className="about-logo-container">
                        <img src="https://res.cloudinary.com/media-tko/image/upload/v1528257711/logos/tko_tagline_gold_black_corners.png" alt="logo" className="about-logo" />
                    </div>
                    <div className="about-text">
                        Something something something Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Optio odit iure pariatur atque, eligendi reprehenderit deserunt sapiente repellat qui
                         quam sit alias sed accusamus neque, eveniet similique ad nostrum recusandae?
                    </div>
                </div>
                <div className="about-headshot-container">
                    <div className="about-headshot-1">
                        <img src="https://res.cloudinary.com/media-tko/image/upload/v1529946468/headshots/23549932_10211050040742989_684165768730466141_o.jpg" alt="Drew" className="about-headshot"/>
                    </div>
                    <div className="about-headshot-2">
                        <img src="https://res.cloudinary.com/media-tko/image/upload/v1529946575/headshots/10269041_10152456440966894_5145575433302114207_o.jpg" alt="AJK" className="about-headshot"/>
                    </div>
                </div>
            </div>
        </div>
    )
}