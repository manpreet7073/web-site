import React from 'react';

function CareerSection() {
  return (
    <section className="py-5">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="section-title text-secondary">Career Opportunities<span /></p>
            <p className='mb-5'>Join our team and take your career to the next level!</p>
          </div>
        </div>
        <div className="row g-4">
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="feature-item bg-light rounded text-center p-4">
          <h5 className="mb-3">Software Engineer</h5>
          <p className="m-0"> We re looking for a skilled software engineer to join our team. If you have experience with React, Node.js, and MongoDB, we d love to hear from you!</p>
        </div>
        <a href="#" className="btn btn-primary">Apply Now</a>

      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="feature-item bg-light rounded text-center p-4">
          <h5 className="mb-3">UI/UX Designer</h5>
          <p className="m-0">We re seeking a talented UI/UX designer to create visually stunning and user-friendly interfaces. If you have experience with Sketch, Figma, and Adobe Creative Suite, we d love to hear from you! </p>
        </div>
        <a href="#" className="btn btn-primary">Apply Now</a>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="feature-item bg-light rounded text-center p-4">
          <h5 className="mb-3">SEO &amp; Backlinks</h5>
          <p className="m-0">SEO (Search Engine Optimization) involves optimizing websites to improve search engine rankings, while backlinks are links from other sites that enhance SEO authority.</p>
        </div>
        <a href="#" className="btn btn-primary">Apply Now</a>
      </div>
    </div>
      </div>
    </section>
  );
}

export default CareerSection;
