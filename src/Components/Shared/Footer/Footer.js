import React from 'react';
import './Footer.css';
import logo from '../../../Pictures/logo.png';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 mt-5 mb-5">
                        <img src={logo} alt="Onion Logo" height="50px" />
                    </div>
                    <div className="col-12 col-lg-8 col-md-8 d-flex mt-5 mb-5">
                        <div className="col-lg-6 col-md-6 text">
                            <p>About Online Food</p>
                            <p>Read Our Blog</p>
                            <p>Sign Up To Deliver</p>
                            <p>Add Your Restaurant</p>
                        </div>
                        <div className="col-lg-6 col-md-6 text">
                            <p>Get Help</p>
                            <p>Read FAQS</p>
                            <p>View All Cities</p>
                            <p>Restaurant Near Me</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom text d-flex justify-content-between">
                    <small className="mb-5">Copyright &copy;  2022 Red Onion</small>
                    <div className="d-flex mb-5">
                        <p className="me-5">Privacy Policy</p>
                        <p className="me-5">Terms of Use</p>
                        <p className="me-5">Pricing</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;