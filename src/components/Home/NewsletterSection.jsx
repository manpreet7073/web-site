import React from 'react'

const NewsletterSection = () => {
  return (
    <div className="bg-primary1 newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <p className="section-title text-white justify-content-center"><span />Newsletter<span /></p>
          <h1 className="text-center text-white mb-4">Stay Connected with RayonWeb</h1>
          <p className="text-white mb-4">Never miss an update! Join our newsletter to receive the latest news, updates, and insights directly to your inbox.</p>
          <div className="position-relative w-100 mt-3">
            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: 48}} />
            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsletterSection