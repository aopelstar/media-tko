import React, { Component } from 'react';
import './contact.css';
import Head from '../head/Head';


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


    render() {
        return (
            <div className="contact-main">
                <Head />
                <div className="contact-title">
                    Got a question? Hit us up.
                </div>
                <div className="contact-inputs-container">
                    <div className="contact-name-row">
                        <div className="contact-name-text">
                            Name:
                        </div>
                        <div className="contact-name-input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="contact-email-row">
                        <div className="contact-email-text">
                            Email:
                        </div>
                        <div className="contact-email-input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="contact-telephone-row">
                        <div className="contact-telephone-text">
                            Telephone:
                        </div>
                        <div className="contact-telephone-input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="contact-message-row">
                        <div className="contact-message-text">
                            What's up:
                        </div>
                        <div className="contact-message-input">
                        <input type="text"/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
