import Counter1 from '@/assets/counter1.png';
import Client2 from '@/assets/client2.png';
import Client3 from '@/assets/client3.png';
import Client4 from '@/assets/client4.png';
import Image from 'next/image';

const CounterSection = () => {
    return (
        <>
            <section id="counter_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter_1">
                                <div className="counter_img">
                                    <Image 
                                        src={Counter1}
                                        alt="Counter1"
                                    />
                                </div>
                                <div className="counter_content">
                                    <h4>150 <span>+</span></h4>
                                    <h5>Projects</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter_1">
                                <div className="counter_img">
                                    <Image
                                        src={Client2}
                                        alt="Client2"
                                    />
                                </div>
                                <div className="counter_content">
                                    <h4>110 <span>+</span></h4>
                                    <h5>Clients</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter_1">
                                <div className="counter_img">
                                    <Image
                                        src={Client3}
                                        alt="Client3"
                                    />
                                </div>
                                <div className="counter_content">
                                    <h4>120 <span>+</span></h4>
                                    <h5>Success</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-sm-3">
                            <div className="counter_1">
                                <div className="counter_img">
                                    <Image
                                        src={Client4}
                                        alt="Client4"
                                    />
                                </div>
                                <div className="counter_content">
                                    <h4>100 <span>+</span></h4>
                                    <h5>Awards</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CounterSection;