import React, { Component } from "react";
import DataJson from "./DataJson";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

class List extends React.Component{
    render(){
        return(
            <div>
                <Header />

                <div className="breadcrumbs_area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <h3>Product</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>Product</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="pad80">
                <Product />
                </div>
                <Footer />
            </div>
        )
    } 
}


export default List;