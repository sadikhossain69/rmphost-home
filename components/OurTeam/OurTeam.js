import React from 'react';
import Sakkhar from '@/assets/teams1.jpeg';
import Sadik from '@/assets/teams_3.jpg';
import Manabendra from '@/assets/teams_3.jpeg';
import Image from 'next/image';

const OurTeam = () => {
    return (
        <>
            <section id="Team_part">
                <div className="container">
                    <div className="Team_header">
                        <h2>Our <span>Team</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="team_items">
                                <div className="team_img">
                                    <Image
                                        src={Sakkhar}
                                        alt="Sakkhar"
                                        width={350}
                                    />
                                    <div className="overlay">
                                        <a href="https://www.facebook.com/prodipdas.prodipdas.18041"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/in/sakkhar-mjmdr-a89b21259"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="https://www.instagram.com/sakkharmjmdr/?igshid=ZmZhODViOGI%3D&fbclid=IwAR0l50Rd_0BddT0ZNu3mcNz4ZTpelVj882Zv6vtrVpll1YCCXfAY1n-rnBY"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team_content">
                                    <h3>Sakkhar Majumder</h3>
                                    <h4>Web Designer</h4>
                                    <p>I am a proffesional web designer with 1 years experience. I believe only self-confidence will help me reach my goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team_items">
                                <div className="team_img">
                                    <Image
                                        src={Sadik}
                                        alt="Sadik"
                                        width={350}
                                    />
                                    <div className="overlay">
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team_content">
                                    <h3>Sadik Joarder</h3>
                                    <h4>Mern Stack Developer</h4>
                                    <p>I am a proffesional web designer with 1 years experience. I believe only self-confidence will help me reach my goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="team_items">
                                <div className="team_img">
                                    <Image
                                        src={Manabendra}
                                        alt="Manabendra"
                                        width={320}
                                    />
                                    <div className="overlay">
                                        <a href="https://www.facebook.com/manabendra.singha.169"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a href="https://www.linkedin.com/in/manabendra-singha-7a205717b/"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team_content">
                                    <h3>Manabendra Singa</h3>
                                    <h4>Founder & Full Stack Developer</h4>
                                    <p>Hello, my name is Manabendra and I am a fullstack  developer. I have been working as a developer for 3 in rpmhost and I have been enjoying every moment of it.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeam;