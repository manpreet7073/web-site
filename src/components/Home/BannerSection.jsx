import {Link} from 'react-router-dom'
import React from 'react'
import CustomImage from '../core/CustomImage'

const BannerSection = () => {
  return (
    <div className="bg-primary1 hero-header">
      <div className="container px-lg-5">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated slideInDown">Your Vision, Our Code &amp; Turning Ideas into Reality</h1>
            <p className="text-white pb-3 animated slideInDown">At RayonWeb Solutions, we specialize in software development, web design, and digital solutions, dedicated to bringing your unique ideas to life. Our experienced team collaborates closely with clients to deliver customized products that exceed expectations. Whether you&aposre a startup with a groundbreaking idea or an established enterprise seeking digital transformation, we partner with you from concept to launch. Discover how Your Vision, Our Code can drive your business forward.</p>
            <Link to="/about" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</Link>
            <Link to="/contact" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <CustomImage className="img-fluid animated-image" height="100%" width="100%" src="/hero.png" alt="loading"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection