import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi
                            quaerat fuga ducimus et laborum dolorem sunt quibusdam sequi odit
                            mollitia optio quod fugit error accusantium esse explicabo hic nihil
                            iure blanditiis ullam vel nobis, quam facilis. Esse, accusamus eius.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li>
                                <Link to="/user/order">View All Order</Link>
                            </li>
                            <li>
                                <Link to="/user/review">Write A Review</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li>
                                <Link to="https://www.linkedin.com/in/shantoxdp/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2021 All Rights Reserved by SHANTO RAHMAN
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
