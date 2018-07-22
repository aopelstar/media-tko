import React, { Component } from 'react';
import './work.css';
import Head from '../head/Head';
import Axios from 'axios';



export default class Work extends Component {
    constructor() {
        super();
        this.state = ({
            videos: []
        })
    }

    

    render() {
        return (
            <div className="work-main">
            <Head />
            <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1529012938/Video/puka_final.mp4" />
                </video>
                <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1529007110/Video/Dog-Duane-Reade-Adventure-feat.-Marnie-the-Dog-aka-DERP-the-DOG_MbTube.Com.mp4" />
                </video>
                <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1528235566/Video/accident.mov" />
                </video>
                <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1528235514/Video/GOPR1915.mp4" />
                </video>
                <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1529007110/Video/Dog-Duane-Reade-Adventure-feat.-Marnie-the-Dog-aka-DERP-the-DOG_MbTube.Com.mp4" />
                </video>
                <video className="work-video" loop muted
         controls={[]}>
         <source src="https://res.cloudinary.com/media-tko/video/upload/v1528235566/Video/accident.mov" />
                </video>
                
            </div>
        )
    }
}