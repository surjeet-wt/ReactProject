import React, { Component } from "react";
import offer from './images/image.jpg';
import offer1 from './images/image.jpg';

import WOW from 'wowjs';

class Offer extends React.Component{

    componentDidMount() {
        new WOW.WOW({
          live: false
      }).init();
      }
    render(){
        return(
            <div className="pad80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="#"><img src={offer} alt="banner" /></a>
                                <div className="banner_content text-start">
                                    <h3 className="wow animate__fadeInUp">Big Sale Products</h3>
                                    <h2 className="wow animate__fadeInUp">Clothing Riviera <br />Dandies</h2>
                                    <a className="wow animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <figure className="single_banner">
                            <div className="banner_thumb">
                                <a href="#"><img src={offer1} alt="banner" /></a>
                                <div className="banner_content text-start">
                                    <h3 className="wow animate__fadeInUp">Top Products</h3>
                                    <h2 className="wow animate__fadeInUp">Clothing Riviera <br />Dandies</h2>
                                    <a className="wow animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        )
    } 
}


export default Offer;