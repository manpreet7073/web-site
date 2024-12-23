import React from 'react';
import { FaSearch, FaLaptopCode,FaShieldAlt, FaArrowRight, FaPhp,FaVuejs,FaShoppingCart, FaNodeJs, FaAngular} from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { SiPayloadcms } from "react-icons/si";
import { RiReactjsLine,RiNextjsFill } from "react-icons/ri";
import {Link} from 'react-router-dom';


const ServiceSection = ({ PageName }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span />Our Services<span />
          </p>
          <h1 className="text-center mb-5 main-cl">What Solutions We Provide</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaLaptopCode size={50} />
              </div>
              <h5 className="mb-3 main-cl">Web Designing and development</h5>
              <p className="m-0">A team of expert web developers and designers with a versatile skill-set enables us to create user-friendly websites that enhance your online presence and customer experience.</p>
              <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <GrCloudComputer size={50} />
              </div>
              <h5 className="mb-3 main-cl">Cloud Computing</h5>
              <p className="m-0">Cloud Computing enables on-demand access to computing resources like servers and storage, delivered over the internet for enhanced scalability and flexibility</p>
              <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaSearch size={50} />
              </div>
              <h5 className="mb-3 main-cl">SEO Optimization</h5>
              <p className="m-0">SEO Optimization involves techniques to enhance website visibility in search engine results, improving organic traffic and online presence effectively.</p>
              <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
            </div>
          </div>
          {PageName === "home" &&
          <>
          <div className='col-lg-4' ></div><div className='col-lg-4 text-center'><Link to="/service" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link></div><div className='col-lg-4'></div>
          </>
          }          

          {PageName !== "home" && (
            <>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                  <FaPhp  size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">PHP development</h5>
                  <p className="m-0">Geared toward improving business growth and customer experience, our PHP solutions are dynamic and robust, allowing you to develop superior performance parameters.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <FaShoppingCart size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">eCommerce Solutions</h5>
                  <p className="m-0">Bolster your marketing efforts with an impressive eCommerce platform that allows you to run your online store with great efficiency, boosting your online business.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <SiPayloadcms size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">CMS</h5>
                  <p className="m-0">Integrating a custom content management system means improved functionality, effective adaptability, and increased security, working more efficiently than off-the-shelf solutions.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <FaNodeJs size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">NodeJS Development</h5>
                  <p className="m-0">A programming language written in JavaScript, our NodeJS development services support low APIs, allowing us to build applications that deliver competitive results.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <FaAngular size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">Angular JS</h5>
                  <p className="m-0">Using UX/UI technologies, we create dynamic applications and websites that allow our clients to incorporate an effective interface into their business framework.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <RiReactjsLine size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">React JS</h5>
                  <p className="m-0">Our ReactJS Frameworks allow our clients to add and sustain flexibility and convenience to their websites and mobile applications.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <RiNextjsFill size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">Next JS</h5>
                  <p className="m-0">Our ReactJS Frameworks allow our clients to add and sustain flexibility and convenience to their websites and mobile applications.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <FaVuejs size={50} />
                  </div>
                  <h5 className="mb-3 main-cl">Vue JS</h5>
                  <p className="m-0">Our ReactJS Frameworks allow our clients to add and sustain flexibility and convenience to their websites and mobile applications.</p>
                  <Link className="btn btn-square" to="/service"><FaArrowRight size={15} /></Link>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column text-center rounded">
                <div className="service-icon flex-shrink-0">
                  <FaShieldAlt size={50} />
                </div>
                <h5 className="mb-3 main-cl">Cyber Security Services</h5>
                <p className="m-0">Protect your business with our advanced cyber security services, ensuring the safety and integrity of your data and systems.</p>
                <Link className="btn btn-square" to="/contact"><FaArrowRight size={15} /></Link>
              </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
