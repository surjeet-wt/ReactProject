import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import about from "./images/about.jpg"

import icon1 from "./images/icon1.jpg"
import icon2 from "./images/icon2.jpg"
import icon3 from "./images/icon3.jpg"

class About extends React.Component{
    render(){
        return(
            <div className="about">        
            <Header />     
            <div className="breadcrumbs_area">
                <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb_content">
                                    <h3>About Us</h3>
                                    <ul>
                                        <li><a href="index.html">home</a></li>
                                        <li>about us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <section className="about_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <figure>
                        <div className="about_thumb">
                            <img src={about} alt="" />
                        </div>
                        <figcaption className="about_content">
                            <h1>Where does it come from?</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                           
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>


    <div className="choseus_area grey">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="single_chose">
                        <div className="chose_icone">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="chose_content">
                            <h3>Where Does It Come From?</h3>
                            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare
                                velit amet</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single_chose">
                        <div className="chose_icone">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="chose_content">
                            <h3>Where Does It Come From?</h3>
                            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare
                                velit amet</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single_chose">
                        <div className="chose_icone">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="chose_content">
                            <h3>Where Does It Come From?</h3>
                            <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare
                                velit amet</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                <Footer />
            </div>
        )
    }
}

export default About;