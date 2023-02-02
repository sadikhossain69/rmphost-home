import Logo1 from '@/assets/logos_1.png';
import Logo2 from '@/assets/logos_2.png';
import Logo3 from '@/assets/logos_3.png';
import Logo4 from '@/assets/logos_4.png';
import Logo5 from '@/assets/logos_5.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/scrollbar';

const LogoSection = () => {
    return (
        <>
            <section id="logo_part">
                <div className="container">
                    <div className="row">
                        <Swiper
                            spaceBetween={100}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}

                        >
                            <SwiperSlide>
                                <div className="col-lg col-6 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo5}
                                            alt="Picture of the Logo5"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-lg col-6 col-md-auto">
                                    <div className="logos logos_mar">
                                        <Image
                                            src={Logo2}
                                            alt="Picture of the Logo2"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-lg col-6 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo3}
                                            alt="Picture of the Logo3"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-lg col-6 col-md-auto">
                                    <div className="logos">
                                        <Image
                                            src={Logo4}
                                            alt="Picture of the Logo4"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-lg col-6 col-md-auto">
                                    <div className="logos marsis">
                                        <Image
                                            src={Logo1}
                                            alt="Picture of the Logo1"
                                            width={150}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogoSection;