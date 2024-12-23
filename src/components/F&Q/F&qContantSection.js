import React, { useState } from "react";
import Link from 'next/link';
import { Collapse } from 'react-collapse';

const FandqContantSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-10 wow fadeInUp mb-5" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">FAQ<span /></p>
                            <div className="container">
                                <h1>Frequently Asked Questions (FAQ)</h1>
                                <div className="faq-item mt-4">
                                    <h3 onClick={() => toggleCollapse(1)} className="h4 mb-3 main-cl">What is RayonWeb?</h3>
                                    <Collapse isOpened={openIndex === 1}>
                                        <p className="hadding-p">
                                            <span className="main-cl">RayonWeb</span> is a company that provides [describe your services or products]. Our goal is to [state your mission or vision].
                                        </p>
                                    </Collapse>
                                </div>

                                <div className="faq-item">
                                    <h3 onClick={() => toggleCollapse(2)} className="h4 mb-3 main-cl">How can I contact RayonWeb?</h3>
                                    <Collapse isOpened={openIndex === 2}>
                                        <p className="hadding-p">
                                            You can contact us via email at <a href="mailto:support@rayonweb.com">support@rayonweb.com</a> or by phone at +1-234-567-8901. For more details, visit our <Link href="/contact">Contact Us</Link> page.
                                        </p>
                                    </Collapse>
                                </div>

                                <div className="faq-item">
                                    <h3 onClick={() => toggleCollapse(3)} className="h4 mb-3 main-cl">What services do you offer?</h3>
                                    <Collapse isOpened={openIndex === 3}>
                                        <p className="hadding-p">
                                            We offer a range of services including [list your main services or products]. For a detailed list, please visit our <Link href="/services">Services</Link> page.
                                        </p>
                                    </Collapse>
                                </div>

                                <div className="faq-item">
                                    <h3 onClick={() => toggleCollapse(4)} className="h4 mb-3 main-cl">How can I sign up for your services?</h3>
                                    <Collapse isOpened={openIndex === 4}>
                                        <p className="hadding-p">
                                            To sign up for our services, visit our <a href="signup.html">Sign Up</a> page and follow the instructions provided. If you encounter any issues, please contact our support team for assistance.
                                        </p>
                                    </Collapse>
                                </div>

                                <div className="faq-item">
                                    <h3 onClick={() => toggleCollapse(5)} className="h4 mb-3 main-cl">What is your refund policy?</h3>
                                    <Collapse isOpened={openIndex === 5}>
                                        <p className="hadding-p">
                                            Our refund policy is outlined in our <Link href="/terms">Terms of Service</Link> page. In general, we offer refunds under specific conditions. For more details, please review our policy or contact our support team.
                                        </p>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FandqContantSection;
