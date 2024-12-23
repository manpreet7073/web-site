import React from 'react'
import { FaLaptopCode,FaSearch  } from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";


const SkillsSection = () => {
  return (
    <div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
  <div className="wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary justify-content-center"><span />Our Feature<span /></p>
      </div>
    <div className="row g-4">
    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="feature-item bg-light rounded text-center p-4">
          <FaLaptopCode size={70} className="text-primary mb-4" />
          {/* <i className="fa fa-3x fa-laptop-code text-primary mb-4" /> */}
          <h5 className="mb-3">Design &amp; Development</h5>
          <p className="m-0">The strategic process of creating and refining products through iterative planning, design, and implementation to meet user needs effectively and drive innovation.</p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="feature-item bg-light rounded text-center p-4">
          <MdFeaturedPlayList size={70} className="text-primary mb-4" />
          <h5 className="mb-3">Cloud Computing</h5>
          <p className="m-0">Cloud Computing refers to accessing and storing data and applications over the internet, offering scalability, flexibility, and cost-efficiency for businesses and users alike.</p>
        </div>
      </div>
      <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="feature-item bg-light rounded text-center p-4">
          {/* <i className="fa fa-3x fa-search text-primary mb-4" /> */}
          <FaSearch size={70} className="text-primary mb-4" />
          <h5 className="mb-3">SEO &amp; Backlinks</h5>
          <p className="m-0">SEO (Search Engine Optimization) involves optimizing websites to improve search engine rankings, while backlinks are links from other sites that enhance SEO authority.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SkillsSection