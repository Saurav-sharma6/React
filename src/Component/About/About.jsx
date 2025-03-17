import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-content">
                <p>Welcome to Shoppers, your number one source for all things. We're dedicated to providing you the very best of Clothes, with an emphasis on different varieties.</p>
                <p>Founded in 2024 by Lambton College Students, Shoppers has come a long way from its beginnings in Canada. When Lambton college students first started out, their passion for eco-friendly products drove them to start their own business.</p>
                <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p className="signature">Sincerely,</p>
                <p className="signature-name">Lambton</p>
            </div>
        </div>
    );
}

export default About;
