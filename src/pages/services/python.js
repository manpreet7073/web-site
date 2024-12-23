import React from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { FaPython, FaArrowRight, FaFlask} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

import Link from 'next/link';

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => (
    <div className="loader text-center">
      <Image src="/loading.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
  ),
});

export default function python() {
  return (
<div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span />Python Services<span />
          </p>
          <h1 className="text-center mb-5 main-cl">Our Python Development Solutions</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaPython size={50} />
              </div>
              <h5 className="mb-3 main-cl">Custom Python Development</h5>
              <p className="m-0">We provide custom Python development solutions tailored to your business needs, ensuring high performance and scalability.</p>
              <Link className="btn btn-square" href="/contact"><FaArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaFlask size={50} />
              </div>
              <h5 className="mb-3 main-cl">Web Development with Flask</h5>
              <p className="m-0">We build robust and scalable web applications using Flask, a lightweight Python web framework, ensuring fast and reliable solutions.</p>
              <Link className="btn btn-square" href="/contact"><FaArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <SiDjango size={50} />
              </div>
              <h5 className="mb-3 main-cl">Enterprise Solutions with Django</h5>
              <p className="m-0">Our Django development services provide secure and scalable enterprise solutions, catering to complex business needs efficiently.</p>
              <Link className="btn btn-square" href="/contact"><FaArrowRight size={15} /></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column text-center rounded">
              <div className="service-icon flex-shrink-0">
                <FaPython size={50} />
              </div>
              <h5 className="mb-3 main-cl">Python Automation Services</h5>
              <p className="m-0">Automate your business processes with our Python automation services, designed to enhance efficiency and reduce operational costs.</p>
              <Link className="btn btn-square" href="/contact"><FaArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
