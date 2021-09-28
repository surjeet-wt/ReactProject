import React, {Component} from "react";

import logo from './images/logo.jpg';
import itunes from './images/itunes.jpg';
import playstore from './images/playstore.jpg';

class Footer extends React.Component{
    render(){
        return(

            <footer className="footer_widgets">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="widgets_container contact_us ">
                            <h3 className="wow animate__fadeInUp">Opening Time</h3>
                            <p className="wow animate__fadeInUp"><span>Mon - Fri:</span> 8AM - 10PM</p>
                            <p className="wow animate__fadeInUp"><span>Sat:</span> 9AM-8PM</p>
                            <p className="wow animate__fadeInUp"><span>Suns:</span> 14hPM-18hPM</p>
                            <p className="wow animate__fadeInUp"><b>We Work All The Holidays</b></p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="widgets_container widget_menu">
                            <h3 className="wow animate__fadeInUp">Information</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li className="wow animate__fadeInUp"><a href="#">About Us</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Checkout</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Contact</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Frequently Questions</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Wishlist</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="widgets_container widget_app">
                            <div className="footer_logo wow animate__fadeInUp">
                                <a href="index.html"><img src={logo} alt="" /></a>
                            </div>
                            <div className="footer_widgetnav_menu">
                                <ul>
                                    <li className="wow animate__fadeInUp"><a href="#">Payment</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Affiliates</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Contact</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Internet</a></li>
                                </ul>
                            </div>
                           
                            <div className="footer_app">
                                <ul>
                                    <li className="wow animate__fadeInUp"><a href="#"><img src={playstore} alt="" /></a></li>
                                    <li className="wow animate__fadeInUp"><a href="#"><img src={itunes} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="widgets_container widget_menu">
                            <h3 className="wow animate__fadeInUp">My Account</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li className="wow animate__fadeInUp"><a href="#">My Account</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Contact</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Shopping cart</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Checkout</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Shop</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Order History</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="widgets_container widget_menu">
                            <h3 className="wow animate__fadeInUp">Customer Service</h3>
                            <div className="footer_menu">
                                <ul>
                                    <li className="wow animate__fadeInUp"><a href="E">Contact Us</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Terms of use</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Privacy Policy</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Site Map</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">My Account</a></li>
                                    <li className="wow animate__fadeInUp"><a href="#">Returns</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </footer>
        )
    }
}


export default Footer;