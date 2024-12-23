import React from 'react'
import Image from 'rc-image'
import {Link} from 'react-router-dom';
import { FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-primary1 text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-3">
          <p className="section-title text-white h5 mb-4">Address<span /></p>
          <p><i className="fa fa-map-marker-alt me-3" />Mohali India</p>
          <p><i className="fa fa-envelope me-3" />info@rayonweb.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social"  to=""><FaTwitter size={20} /></a>
            <a className="btn btn-outline-light btn-social"  to=""><FaFacebookF size={20} /></a>
            <a className="btn btn-outline-light btn-social"  to=""><FaInstagram size={20} /></a>
            <a className="btn btn-outline-light btn-social"  to=""><FaLinkedinIn size={20} /></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <p className="section-title text-white h5 mb-4">Quick Link<span /></p>
          <Link className="btn btn-link"  to="/about">About Us</Link>
          <Link className="btn btn-link"  to="/contact">Contact Us</Link>
          <Link className="btn btn-link"  to="/privacy-policy">Privacy Policy</Link>
          <Link className="btn btn-link"  to="/f&q">F&Q</Link>
          <Link className="btn btn-link"  to="/career">Career</Link>
        </div>
        <div className="col-md-6 col-lg-3">
          <p className="section-title text-white h5 mb-4">Gallery<span /></p>
          <div className="row g-2">
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-1.jpg" alt="Image1" />
            </div>
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-2.jpg" alt="Image2" />
            </div>
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-3.jpg" alt="Image3" />
            </div>
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-4.jpg" alt="Image4" />
            </div>
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-5.jpg" alt="Image5" />
            </div>
            <div className="col-4">
              <Image className="img-fluid" width={20} height={20} src="/portfolio-6.jpg" alt="Image6" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-lg-5">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" to="#">Rayonweb solutions</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" to="https://rayonweb.com">Rayonweb solutions</a>
          </div>
          {/* <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a  to="">Home</a>
              <a  to="">Cookies</a>
              <a  to="">Help</a>
              <a  to="">FQAs</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Footer