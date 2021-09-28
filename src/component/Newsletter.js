import React, { Component } from 'react';

class Newsletter extends React.Component{
    render(){
        return(
            <div className="newsletter_area_start grey">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section_title">
                        <h2 className="wow animate__fadeInUp">Get <span>20% Off</span> Your Next Order</h2>
                    </div>
                    <div className="newsletter_container">
                        <div className="subscribe_form">
                            <form  className="mc-form footer-newsletter wow animate__fadeInUp">
                                <input id="mc-email" type="email" autoComplete="off" placeholder="Enter you email" name="EMAIL" />
                                <button id="mc-submit">Subscribe</button>
                                <div className="email_icon">
                                    <i className="icon-mail"></i>
                                </div>
                            </form>
                            <div className="mailchimp-alerts text-centre">
                                <div className="mailchimp-submitting"></div>
                                <div className="mailchimp-success"></div>
                                <div className="mailchimp-error"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}


export default Newsletter;