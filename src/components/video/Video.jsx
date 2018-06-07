import React from 'react';
import './video.css';
import { DefaultPlayer as Video } from 'react-html5video';

export default function video(){
    return(
       
     <div className="video-main">
         <Video  class="splash-video" autoPlay loop muted
         controls={[]}>
            <source src="https://res.cloudinary.com/media-tko/video/upload/v1528235566/Video/accident.mov" />
        </Video>
     </div>
    )
}

