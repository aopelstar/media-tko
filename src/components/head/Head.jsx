import React, { Component } from 'react';
import './head.css';
import hamburger from '../../images/hamburger.png';
import { Link } from 'react-router-dom';

export default class Head extends Component {
    constructor() {
        super();
        this.state = ({
            display: true
        })
    }

    displayChange(){
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return (
            <div className="head-main">
                <div className="menu-container">
                    <div className="hamburger-container">
                        <img src={hamburger} alt="hamburger" className="hamburger-icon" onClick={() => this.displayChange()}/>
                    </div>
                    <div className={this.state.display?"menu menu-hide":"menu"}>
                        <div className="menu-items">
                            {/* <Link to ='/home'><div className="home-container">home</div></Link> */}
                            <Link to ='/work'><div className="work-container">work</div></Link>
                            <Link to ='/about'><div className="about-container">about</div></Link>
                            <Link to ='/packages'><div className="packages-container">packages</div></Link>
                            <Link to ='/contact'><div className="contact-container">contact</div></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}