import React from 'react';
import './About.css';
import AboutImg from '../../assets/about-img.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about-content grid">
                    <div className="about-img">
                        <img src={AboutImg} alt="about" />
                    </div>
                    <div className="about-text">
                        <div className="about-title fs-26 ls-1">About Book Hub</div>
                        <p className="fs-17">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at architecto odio tenetur, rem eius blanditiis officia illo officiis similique, cumque consectetur, excepturi error. Repellat ullam dolores voluptatibus porro quod! Veniam esse ullam sequi explicabo quae, numquam facere atque porro minus eaque ea. Nam, unde!</p>
                        <p className="fs17">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque earum recusandae quos autem fugit veritatis nemo, ea consequuntur dicta tempora magnam dolore voluptatum voluptatibus omnis. Atque sequi odit eligendi repellendus?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;