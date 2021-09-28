import React, { Component } from 'react';
import logo from './images/logo.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import List from './List';
import About from './About';
import Navigation from './Navigation';
import Product from './Product';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';



class Header extends React.Component{
    render() {
        return(
            <StickyHeader  
             
            header = {
            <div className="main_header header_five">
                <div className="header_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-7">
                                <div className="welcome-text text-start">
                                    <p className="text-start">Free Delivery: Take advantage of our time to save event</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="language_currency text-right">
                                    <ul>
                                        <li className="currency"><a href="#"> USD <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_currency">
                                                <li><a href="#">EUR</a></li>
                                                <li><a href="#">GPB</a></li>
                                                <li><a href="#">RUP</a></li>
                                            </ul>
                                        </li>
                                        <li className="language"><a href="#"> English <i className="fa fa-angle-down"></i></a>
                                            <ul className="dropdown_language">
                                                <li><a href="#">French</a></li>
                                                <li><a href="#">Spanish</a></li>
                                                <li><a href="#">Russian</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_middle header_middle5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-4">
                                <div className="logo text-start">
                                    <a href="/"><img src={logo} alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 colm_none">
                                
                                <div className="main_menu menu_position">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/About">About</Link></li>
                                            <li><Link to="/List">Product</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>  
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="header_account_area header_account5">
                                    <div className="header_account-list top_links">
                                    <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                                    </div>
                                    <div className="header_account-list  mini_cart_wrapper">
                                        <a href="#"><FontAwesomeIcon icon={faShoppingCart} />
                                        <span className="item_count">2</span></a>                                      
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         }
         >

        </StickyHeader>
        )
    }
}



export default Header;