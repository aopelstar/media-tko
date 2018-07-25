import React, { Component } from 'react';
import './contact.css';
import Head from '../head/Head';
import axios from 'axios';


export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            telephone: "",
            message: ""
        }
    }

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    submit(){
        let body = {
            name: this.state.name,
            email: this.state.email,
            telephone: this.state.telephone,
            message: this.state.message
        }
        let promise = axios.post('/api/sendEmail', body)
        promise.then( () => {
            window.location.assign('/#/thanks');
            
        })
    }


    render() {
        return (
            <div className="contact-main">
                <Head />
                <div className="contact-title">
                    <h1>Got a question?
                       </h1>
                    <h2>
                        Hit us up.
                           </h2>
                </div>
                <div className="contact-inputs-container">
                    <div className="contact-name-row">
                        <div className="contact-name-text">
                            Name:
                        </div>
                        <div className="contact-name-input">
                            <input type="text" onChange={(e) => this.handleChange("name", e.target.value)}/>
                        </div>
                    </div>
                    <div className="contact-email-row">
                        <div className="contact-email-text">
                            Email:
                        </div>
                        <div className="contact-email-input">
                            <input type="text" onChange={(e) => this.handleChange("email", e.target.value)}/>
                        </div>
                    </div>
                    <div className="contact-telephone-row">
                        <div className="contact-telephone-text">
                            Telephone:
                        </div>
                        <div className="contact-telephone-input">
                            <input type="text" onChange={(e) => this.handleChange("telephone", e.target.value)}/>
                        </div>
                    </div>
                    <div className="contact-message-row">
                        <div className="contact-message-text">
                            What's up:
                        </div>
                        <div className="contact-message-input">
                            <input type="text" onChange={(e) => this.handleChange("message", e.target.value)}/>
                        </div>

                    </div>
                </div>
                <div className="contact-submit">
                    <button className="contact-button" onClick={() => this.submit()}>
                        submit
                            </button>
                </div>
            </div>
        )
    }
}
