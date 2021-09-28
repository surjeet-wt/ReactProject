import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Contact extends React.Component{
    render(){
        return(

            <div>
                <Header />
                <div className="breadcrumbs_area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact_area pad80">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="contact_message content text-start">
                        <h3>contact us</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,</p>
                        <ul>
                            <li><i className="fa fa-fax"></i> Address : No 40 Baria Sreet 133/2 NewYork City</li>
                            <li><i className="fa fa-phone"></i> <a href="#">demo@example.com</a></li>
                            <li><i className="fa fa-envelope-o"></i><a href="tel:0123456789">0123456789</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="contact_message form text-start">
                        <h3>Tell us your project</h3>
                        <form id="contact-form" method="POST" action="assets/mail.php">
                            <p>
                                <label> Your Name (required)</label>
                                <input name="name" placeholder="Name *" type="text" autoComplete="off"  />
                            </p>
                            <p>
                                <label> Your Email (required)</label>
                                <input name="email" placeholder="Email *" type="email"  autoComplete="off"  />
                            </p>
                            <p>
                                <label> Subject</label>
                                <input name="subject" placeholder="Subject *" type="text"  autoComplete="off"  />
                            </p>
                            <div className="contact_textarea">
                                <label> Your Message</label>
                                <textarea placeholder="Message *"  autoComplete="off"  name="message" className="form-control2"></textarea>
                            </div>
                            <button type="submit"> Send</button>
                            <p className="form-messege"></p>
                        </form>

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


export default Contact;