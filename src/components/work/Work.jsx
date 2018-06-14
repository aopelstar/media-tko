import React, { Component } from 'react';
import './work.css';
import Head from '../head/Head';
import { DefaultPlayer as Video } from 'react-html5video';
import Axios from 'axios';



export default class Work extends Component {
    constructor() {
        super();
        this.state = ({
            videos: []
        })
    }

    async componentDidMount() {
        await Axios.get('http://localhost:6543/api/videos').then(({ data }) => {
            this.setState({
                videos: data.resources
            })
        })

    }

    render() {
        let gallery = this.state.videos.map((vids, i) => {
            return (
                <div key={i} className="video-container">
                    <Video class="work-video" autoPlay loop muted
                        controls={[]}>
                        <source src={vids.url} className="individual-video"/>
                    </Video>
                </div>
            )
        })
        return (
            <div className="work-main">
                <Head />
                { gallery }
            </div>
        )
    }
}