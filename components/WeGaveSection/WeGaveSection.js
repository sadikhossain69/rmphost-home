import React from 'react';
import gaveOffer from '@/assets/gave_offer.png';
import Image from 'next/image';

const WeGaveSection = () => {
    return (
        <>
            <section id="gave_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gave_left">
                                <div className="gave_header">
                                    <h2>We Gave The Best <span>Service</span></h2>
                                    <h4>Our experienced developer finalize  your project</h4>
                                </div>
                                <div data-aos="fade-right" className="gave_items d-flex">
                                    <div className="shuffle_icon">
                                        <i className="fa-solid fa-shuffle"></i>
                                    </div>
                                    <div className="gaves_content">
                                        <h5>Cross check</h5>
                                        <h6>We are checking multifactor algorithom</h6>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="gave_items1 d-flex">
                                    <div className="shuffle_icon shuf_icons">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <div className="gaves_content">
                                        <h5>24hrs Customer Support</h5>
                                        <h6>We also provide best priority technical support.</h6>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="gave_items2 d-flex">
                                    <div className="shuffle_icon">
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                    <div className="gaves_content">
                                        <h5>Fast & reliable</h5>
                                        <h6>Our services  ready to launch on time.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-6">
                            <div className="gave_right">
                                <Image
                                    src={gaveOffer}
                                    alt="gaveOffer"
                                    width={500}
                                />
                            </div>
                            <div className="most_rating">
                                <div className="most_icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star stars"></i>
                                </div>
                                <p>The Most Rating We Get</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WeGaveSection;