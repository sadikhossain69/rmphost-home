import service1 from '@/assets/service1.png';
import service2 from '@/assets/service2.png';
import service3 from '@/assets/service3.png';
import service_4 from '@/assets/service_4.png';
import Image from 'next/image';

const ServiceSection = () => {
    return (
        <>
            <section id="service_part">
                <div class="container">
                    <div class="service_header">
                        <h2>Our <span>Service</span></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="service_1">
                                <div class="service_img">
                                    <Image
                                        src={service_4}
                                        alt="service_4"
                                        width={220}
                                    />
                                </div>
                                <div class="service_content">
                                    <h3>Web Development</h3>
                                    <p>Get awe-inspiring business-ready web applications & features into production on-time.</p>
                                    <p class="laravel">#Laravel  #Express.js #wordpress #php #react js.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="service_1">
                                <div class="service_img">
                                    <Image
                                        src={service1}
                                        alt="service1"
                                        width={220}
                                    />
                                </div>
                                <div class="service_content">
                                    <h3>Graphic Design</h3>
                                    <p>Our expert designers can help your Brand Identity.</p>
                                    <p class="laravel">#Photoshop #Illustrator #After effects #Adobe xd.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="service_1">
                                <div class="service_img">
                                    <Image
                                        src={service2}
                                        alt="service2"
                                        width={220}
                                    />
                                </div>
                                <div class="service_content">
                                    <h3>Seo Marketing</h3>
                                    <p>Dedicated to providing ROI-focused online marketing solution to increase your sales..</p>
                                    <p class="laravel">#SEO #PPC #Content Marketing #Social media #Facebook Ads.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="service_1">
                                <div class="service_img">
                                    <Image
                                        src={service3}
                                        alt="service3"
                                        width={220}
                                    />
                                </div>
                                <div class="service_content">
                                    <h3>App Development</h3>
                                    <p>Managed Mobile App Development devoted to discovering & building your desired objectives.
                                    </p>
                                    <p class="laravel"> #React Js  #Flutter  #Kotlin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;