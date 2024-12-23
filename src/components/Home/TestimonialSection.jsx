import React from "react";
import Image from "rc-image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <>
         <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
       <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center"><span />Testimonial<span /></p>
          <h1 className="text-center mb-5">What Say Our Clients!</h1>
        </div>
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <Image width={200} height={200} src="/testimonial-3.jpg" alt="Shirley Fultz" />
        <div className="myCarousel">
          <h3 className="mt-3 text-white1">Shirley Fultz</h3>
          <h4 className="main-cl">CEO</h4>
          <p className="text-white1">
            Its freeing to be able to catch up on customized news and not be
            distracted by a social media element on the same site
          </p>
        </div>
      </div>

      <div>
        <Image width={200} height={200} src="/testimonial-2.jpg" alt="Daniel Keystone" />
        <div className="myCarousel">
          <h3 className="mt-3 text-white1">Daniel Keystone</h3>
          <h4 className="main-cl">CEO</h4>
          <p className="text-white1">
            The simple and intuitive design makes it easy for me to use. I highly
            recommend Fetch to my peers.
          </p>
        </div>
      </div>

      <div>
        <Image width={200} height={200} src="/testimonial-1.jpg" alt="Theo Sorel" />
        <div className="myCarousel">
          <h3 className="mt-3 text-white1">Theo Sorel</h3>
          <h4 className="main-cl">CEO</h4>
          <p className="text-white1">
            I enjoy catching up with Fetch on my laptop, or on my phone when
            I m on the go!
          </p>
        </div>
      </div>
    </Carousel>
    </div>
    </div>
    </>
  );
};

export default Testimonials;
