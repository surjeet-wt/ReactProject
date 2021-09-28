import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class Naigation extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>  
                </ul>
            </nav>
        )
    } 
}


export default Naigation;