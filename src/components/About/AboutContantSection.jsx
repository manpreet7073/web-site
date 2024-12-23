import React, { useEffect, useRef } from 'react';
import Image from 'rc-image';
import {Link} from 'react-router-dom';

const AboutContantSection = ({ PageName }) => {
  const progressBar1Ref = useRef(null);
  const progressBar2Ref = useRef(null);
  const progressBar3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 });

    const progressBar1 = progressBar1Ref.current;
    const progressBar2 = progressBar2Ref.current;
    const progressBar3 = progressBar3Ref.current;

    if (progressBar1) observer.observe(progressBar1);
    if (progressBar2) observer.observe(progressBar2);
    if (progressBar3) observer.observe(progressBar3);

    // Cleanup observer on component unmount
    return () => {
      if (progressBar1) observer.unobserve(progressBar1);
      if (progressBar2) observer.unobserve(progressBar2);
      if (progressBar3) observer.unobserve(progressBar3);
    };
  }, []);

  return (
    <>
      {PageName === "home" && (
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp mb-5" data-wow-delay="0.1s">
                <p className="section-title text-secondary">About Us<span /></p>
                <h1 className="mb-5 main-cl">#1 Digital solution with 10 years of experience</h1>
                <p className="mb-4">At <span className='main-cl'>RayonWeb</span>, our mission is to provide high-quality, scalable, and efficient software solutions that drive success for our clients. We aim to bridge the gap between technology and business, ensuring our clients have the tools they need to excel in a competitive landscape.</p>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Digital Marketing</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div ref={progressBar1Ref} className="progress-bar progress-bar1 bg-primary" role="progressbar" />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">SEO &amp; Backlinks</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div ref={progressBar2Ref} className="progress-bar progress-bar2 bg-primary" role="progressbar" />
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Design &amp; Development</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div ref={progressBar3Ref} className="progress-bar progress-bar3 bg-primary" role="progressbar" />
                  </div>
                </div>
                <Link to="/about" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link>
              </div>
              <div className="col-lg-6">
                <Image className="img-fluid wow zoomIn" height={500} width={500} data-wow-delay="0.5s" alt='new-test' src="/about.png" />
              </div>
            </div>
          </div>
        </div>
      )}
      {PageName !== "home" && (
        <div className="py-5 about-sec">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-10 wow fadeInUp mb-5" data-wow-delay="0.1s">
                <p className="section-title text-secondary">About Us<span /></p>
                <h1 className="mb-5 main-cl">#1 Digital solution with 10+ years of experience</h1>
                <div className="container mt-5">
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">Our Mission</h2>
                    <p className='hadding-p'>
                      At <span className='main-cl'>RayonWeb</span>, our mission is to provide high-quality, scalable, and efficient software solutions that drive success for our clients. We aim to bridge the gap between technology and business, ensuring our clients have the tools they need to excel in a competitive landscape.
                    </p>
                  </section>
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">Our Vision</h2>
                    <p>
                      We envision a world where technology seamlessly integrates with business processes, enhancing productivity and fostering innovation. Our goal is to be at the forefront of this technological evolution, consistently delivering solutions that set new standards in the industry.
                    </p>
                  </section>
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">What We Do</h2>
                    <p>RayonWeb specializes in a wide range of software services, including:</p>
                    <ul className="about">
                      <li>Custom Software Development: Tailored solutions to meet unique business needs.</li>
                      <li>Web Development: Creating dynamic, responsive, and user-friendly websites.</li>
                      <li>Mobile App Development: Innovative mobile applications for Android and iOS platforms.</li>
                      <li>Cloud Solutions: Scalable cloud-based services to enhance business operations.</li>
                      <li>AI & Machine Learning: Integrating advanced AI solutions to drive business intelligence.</li>
                      <li>IT Consulting: Expert guidance to optimize your IT strategy and infrastructure.</li>
                    </ul>
                  </section>
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">Our Approach</h2>
                    <p>We believe in a client-centric approach, focusing on understanding the specific needs and goals of each business. Our process involves:</p>
                    <ul className="about">
                      <li>Discovery: In-depth analysis of your business requirements and objectives.</li>
                      <li>Design: Crafting intuitive and efficient designs tailored to your needs.</li>
                      <li>Development: Utilizing the latest technologies to build robust and scalable solutions.</li>
                      <li>Testing: Rigorous testing to ensure the highest quality and performance.</li>
                      <li>Deployment: Seamless implementation and integration with your existing systems.</li>
                      <li>Support: Ongoing support and maintenance to ensure long-term success.</li>
                    </ul>
                  </section>
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">Our Team</h2>
                    <p>
                      Our team is composed of talented and experienced professionals who are passionate about technology and innovation. From developers and designers to project managers and IT consultants, every member of our team is dedicated to delivering exceptional results for our clients.
                    </p>
                  </section>
                  <section className='col-lg-10 mb-3 mt-5'>
                    <h2 className="h4 mb-3 main-cl">Why Choose RayonWeb?</h2>
                    <ul className="about">
                      <li>Expertise: Extensive experience across various industries and technologies.</li>
                      <li>Quality: Commitment to delivering high-quality, reliable, and scalable solutions.</li>
                      <li>Innovation: Continuously exploring new technologies and methodologies.</li>
                      <li>Customer Focus: Personalized service and support tailored to your business needs.</li>
                      <li>Results: Proven track record of successful projects and satisfied clients.</li>
                    </ul>
                  </section>
                </div>
                <section className='col-lg-10 mb-3 mt-5'>
                  <h2 className="h5 mb-3 mt-3 main-cl">Contact Us</h2>
                  <p>
                    Ready to transform your business with cutting-edge software solutions? Get in touch with us today to discuss your project and discover how RayonWeb can help you achieve your goals.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutContantSection;
