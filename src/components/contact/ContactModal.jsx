import React, { useState,useEffect } from 'react';
import Image from 'rc-image'
import emailjs from '@emailjs/browser';
import { BiLoaderCircle } from 'react-icons/bi';

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Clear success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    emailjs.send(
      'service_wqzvvnl',
      'template_bvynfqg',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'tb1ZmJ7PCnRghiZiO'
    ).then((result) => {
      setLoading(false);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setLoading(false);
      setSuccessMessage('An error occurred, please try again.');
    });
  };

  return (
    <>
      {show && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <div className="container contact">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="contact-info">
                        <h2>Contact Us</h2>
                        <Image width={500} height={500} src="/hero.png" alt="image"/>
                        <h4>We welcome your queries and are here to assist you.</h4>
                        <label className='control-label'><a href='mailto:info@rayonweb.com'>info@rayonweb.com</a></label>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="fname"
                              placeholder="Enter First Name"
                              name="fname"
                              value={formData.fname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Subject:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lname"
                              placeholder="Enter Last Name"
                              name="subject"
                              value={formData.subject || ''} // Ensure value is always a string
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Message:</label>
                            <textarea
                              className="form-control"
                              id="comment"
                              rows="5"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                              {loading ? <BiLoaderCircle className="spinner" /> : 'Submit'}
                            </button>
                          </div>
                        </form>
                        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
