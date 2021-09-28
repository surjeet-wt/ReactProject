import React, { Component } from 'react';
import Slider from "react-slick";


export default function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
    };
    return (
      <Slider {...settings} className="bannerSlider">
        <div className="single_slider d-flex align-items-center slide_img1" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider_content text-start">
                                <h1 className="wow animate__fadeInUp">Beautiful unique Accessories</h1>
                                <p className="wow animate__fadeInUp">Discount <span>20% Off </span>  </p>
                                <a className="button wow animate__fadeInUp" href="#">Discover Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div className="single_slider d-flex align-items-center slide_img2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider_content text-start">
                                <h1 className="wow animate__fadeInUp">BIG SALE</h1>
                                <p className="wow animate__fadeInUp">Discount <span>20% Off </span>  </p>
                                <a className="button wow animate__fadeInUp" href="#">Discover Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
      </Slider>
    );
  }


