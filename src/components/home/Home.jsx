import React, { Component } from 'react';
import './home.css';
import Head from '../head/Head'

export default class Home extends Component {
    constructor(){
        super();
        this.state = ({
            whatever: ''
        })
    }

    render(){
        return(
            <div className="home-main">
                <Head />

            </div>
        )
    }
}