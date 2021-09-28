import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Product from "./Product";

class Home extends React.Component{
    render(){
        return(
            <div className="homepage" >
                <Header />
                <Banner />
                <Offer />
                <Product />
                <Newsletter />
                <Footer />


            </div>
        )
    }
}

export default Home;