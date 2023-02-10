import Logo1 from '@/assets/logos_1.png';
import Logo2 from '@/assets/logos_2.png';
import Logo3 from '@/assets/logos_3.png';
import Logo4 from '@/assets/logos_4.png';
import Logo5 from '@/assets/logos_5.png';
import Image from 'next/image';
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';

const LogoSection = () => {
    return (
        <>
            <section id="logo_part">
                <div className="container">
                        <div className="row">
                    <Carousel show={4} slide={3} swiping={true} infinite={true} transition={0.2} >

                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos logos_mar">
                                    <Image
                                        src={Logo5}
                                        alt="Picture of the Logo5"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos logos_mar">
                                    <Image
                                        src={Logo2}
                                        alt="Picture of the Logo2"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={Logo3}
                                        alt="Picture of the Logo3"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos">
                                    <Image
                                        src={Logo4}
                                        alt="Picture of the Logo4"
                                        width={150}
                                    />
                                </div>
                            </div>
                            <div className="col-lg col-12 col-md-auto">
                                <div className="logos marsis">
                                    <Image
                                        src={Logo1}
                                        alt="Picture of the Logo1"
                                        width={150}
                                    />
                                </div>
                            </div>
                    </Carousel>
                        </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;