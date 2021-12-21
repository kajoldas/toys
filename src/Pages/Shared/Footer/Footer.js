import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
                        <div className="footer-col">
                            <h4>Our Company</h4>
                            <ul>
                                <li><a href="https://www.google.com">About Us</a> </li>
                                <li><a href="https://www.google.com">Our Story</a> </li>
                                <li><a href="https://www.google.com">Our Products</a> </li>
                                <li><a href="https://www.google.com">Privacy Policy</a> </li>
                                <li><a href="https://www.google.com">Ongoing Affliate Programs</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Help</h4>
                            <ul> 
                                <li><a href="https://www.google.com">Return Policy</a> </li>
                                <li><a href="https://www.google.com">FAQ</a> </li>
                                <li><a href="https://www.google.com">Shipping</a> </li>
                                <li><a href="https://www.google.com">Order Status</a> </li>
                                <li><a href="https://www.google.com">Payment GateWays</a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="https://www.google.com">Remote Controlled Toy</a> </li>
                                <li><a href="https://www.google.com">JhunJhuni</a> </li>
                                <li><a href="https://www.google.com">Push Pop Buble</a> </li>
                                <li><a href="https://www.google.com">Musical Guiter </a> </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us Online</h4>
                            <div className="social-links">
                               <a href="https://www.google.com"><i className="fab fa-facebook-f"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-twitter"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-instagram"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a> 
                                
                            </div>
                        </div>
                   </div>
               </div>
               <h6 style={{color:'white', marginTop:'35px'}}> All © copyright reserved 2020-2021</h6>
           </footer>

        
        </div>
    );
};

export default Footer;
