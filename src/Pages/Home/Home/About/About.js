import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3> toys for your new baby, stick with safe, simple objects that encourage exploration and open-ended play</h3>
					<p>Things like rattles and other grabbing toys, balls, activity gyms and board books are great for encouraging developmental milestones during your baby's first six months.We are the people who provide safe and Good products for your loving child</p>
					<div className="button">
						<Link to="/all-products"><a href="http://www.google.com">Explore More Product</a></Link>
					</div>
				</div>
				<div className="social">
					<a href="http://www.google.com"><i className="fab fa-facebook-f"></i></a>
					<a href="http://www.google.com"><i className="fab fa-twitter"></i></a>
					<a href="http://www.google.com"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
                 <img src="https://i.ibb.co/nCg1yxh/pexels-neosiam-590750.jpg" alt="" />
			</div>
		</div>
	</div>
    );
};

export default About;