import Banner1 from '@/assets/banner1.png';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <section id="Hero_part">
                <div class="container finishss">
                    <div class="row heros_row">
                        <div class="col-lg-7 m-0 p-0">
                            <div class="hero_left">
                                <h1>We Will Help Your Business
                                    <span>Grow 2x</span> Times Using Our Best Technologies</h1>

                                <p>Welcome To rpmhost
                                    rpmhost is a Professional software and website agency Platform. Here we will provide you only interesting content, which you will like very much. Were dedicated to providing you the best of software and website agency. </p>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="hero_right">
                                <Image
                                    src={Banner1}
                                    alt="Picture of the Banner1"
                                    width={500}
                                />
                            </div>
                            <div class="finish_projects">
                                <p>150 <span>+</span> </p>
                                <h6>Finish Projects</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;