import React from 'react';

const ContactUsSection = () => {
    return (
        <section id="contact_part">
            <div className="container contact_position">
                <div className="contact_header">
                    <h2>Contact <span>us</span></h2>
                </div>
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6">
                        <div className="contact_left">
                            <form action="">
                                <div className="input">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Your Email"/>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Your Subject"/>
                                </div>
                                <div className="message">
                                    <textarea name="" id="" cols="30" rows="6" placeholder="Message"></textarea>
                                </div>
                                <div className="submit_btn">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="get_special">
                            <h6>Contact our experts</h6>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="col-lg-6">
                        <div className="contact_right">
                            <h2>Ready To <span>Start</span> Your Business ?</h2>
                            <h4>Contact and tell us what you needed</h4>
                            <p> Rpmhost is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. We are dedicated to providing you the best of software and website agency.</p>
                            <div className="contact_bottom">
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <span>+91 70473 84947, +8801737850178, +8801842593133</span>
                                </div>
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                    <span>info@rpmhost.in</span>
                                </div>
                                <div className="contact_bottom1 d-flex">
                                    <div className="contact_bottom_icons">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span> 5 matha more, Raghunathpur, Ghoradhara, Jhargram, West Bengal 721507</span>
                                </div>
                                <p>rpmhost is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;