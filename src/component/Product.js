import React, { Component } from "react";
import DataJson from "./DataJson";

class Product extends React.Component{
    render(){
        return(
            
            <div className="product_area">
                <div className="container">
                    <div className="product_header">
                        <div className="section_title ">
                            <h2 className="mb-4">Our Products</h2>
                        </div>

                        <div className="row">
                            <DataJson />
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}


export default Product;