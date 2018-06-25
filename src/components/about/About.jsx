import React, { Component } from 'react';
import './about.css';
import Head from '../head/Head'

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            image1: false,
            image2: false,
        }
        this.handleHover = this.handleHover.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
    }

    handleHover() {
        this.setState({
            image1: !this.state.image1,

        })
    }

    handleHover2() {
        this.setState({
            image2: !this.state.image2,

        })
    }

    render() {

        return (
            <div>
                <Head />
                <div className="about-head">
                    <div className="about-container">

                        <div className="about-logo-container">
                            <img src="https://res.cloudinary.com/media-tko/image/upload/v1528257711/logos/tko_tagline_gold.png" alt="logo" className="about-logo" />
                        </div>
                        <div className="about-text">
                            Something something something Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Optio odit iure pariatur atque, eligendi reprehenderit deserunt sapiente repellat qui
                             quam sit alias sed accusamus neque, eveniet similique ad nostrum recusandae?
                    </div>
                    </div>
                    <div className="about-headshot-container">
                        <div className="about-individual-headshot-container">
                            <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={this.state.image1 ? "about-headshot-1 about-headshot-1-hidden" : "about-headshot-1"}>
                                <div className={this.state.image1 ? "about-headshot-text about-headshot-text-hidden" : "about-headshot-text-hidden"}>
                                    Drew is a total dick.  He won't even come to my house party.
                                     blah blah blah we are all friends in the end.  We all go 
                                     the same way home.
                            </div>
                            </div>
                            <div className="about-headshot-name">
                                Drew Thomas
                            </div>
                        </div>
                        <div className="about-individual-headshot-container">
                            <div onMouseEnter={this.handleHover2} onMouseLeave={this.handleHover2} className={this.state.image2 ? "about-headshot-2 about-headshot-2-hidden" : "about-headshot-2"}>
                                <div className={this.state.image2 ? "about-headshot-text about-headshot-text-hidden" : "about-headshot-text-hidden"}>
                                    Andy Keele is just pretty dang cool.  Ask anybody.  
                                    They will all say the same dang thing.
                            </div>
                            </div>
                            <div className="about-headshot-name">
                                Andy Keele
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}