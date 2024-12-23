import React from 'react'
import CustomImage from '../core/CustomImage'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary">About Us<span /></p>
          <h1 className="mb-5">#1 RayonWeb Solutions with 5+ years of experience</h1>
          <p className="mb-4">RayonWeb Solutions, with over 5+ years of experience, specializes in delivering innovative digital solutions tailored to client needs.</p>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Web Designing and development</p>
              <p className="mb-2">95%</p>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary1" role="progressbar" />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Cloud Computing</p>
              <p className="mb-2">90%</p>
            </div>
            <div className="progress">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <p className="mb-2">SEO &amp; Backlinks</p>
              <p className="mb-2">85%</p>
            </div>
            <div className="progress">
              <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <Link href="/service" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</Link>
        </div>
        <div className="col-lg-6">
          <CustomImage className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="/about.png" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutSection