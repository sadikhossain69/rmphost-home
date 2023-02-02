import companyLogo from '@/assets/company_logo.png';
import Image from 'next/image';
import { BsDribbble, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const FooterSection = () => {

    const presentYear = new Date().getFullYear()

    return (
        <>
            <section id="footer_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_1">
                                <Image
                                    src={companyLogo}
                                    alt="company logo"
                                    width={100}
                                />
                                <p> rpmhost is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. Were dedicated to providing you the best of software and website agency.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 m-0 p-0">
                            <div className="footer_2">
                                <h6>Contact</h6>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-building"></i>
                                    </div>
                                    <span>Rpmhost Ltd</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <span>FX2W+GF4, Raghunathpur, Ghoradhara, Jhargram, West Bengal 721507</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <span>+91 70473 84947</span>
                                </div>
                                <div className="footer_2_items d-flex">
                                    <div className="footer_icons">
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                    <span>info@rpmhost.in
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 m-0 p-0">
                            <div className="footer_3">
                                <h6>Capabilities</h6>
                                <div className="footer_3_items">
                                    <ul>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                        <li><a href="#">App Development</a></li>
                                        <li><a href="#">Seo Marketing</a></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 m-0 p-0">
                            <div className="footer_4">
                                <h6>Our Social Media</h6>
                                <div className="social_iconss">
                                    <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/yourdevloper.io/"> <BsFacebook /> </a>
                                    <a href="https://www.linkedin.com/in/rpm-host-59a06a264/"><BsLinkedin /></a>
                                    {/* <a href="#"><i className="fa-brands fa-pinterest-p"></i></a> */}
                                    <a href="https://www.instagram.com/p/CgedHFAhd8F/?igshid=YmMyMTA2M2Y%3D">
                                        <BsInstagram />
                                    </a>
                                    <a href="#"> <i><BsDribbble /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className="hrs" />
                <div className="footer_copy">
                    <p>Copyright {presentYear} © Bustic | Powered by Rpmhost It Limited</p>
                </div>
            </section>
        </>
    );
};

export default FooterSection;