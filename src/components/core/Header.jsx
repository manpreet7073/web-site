import React, { useState } from 'react';
import {Link,useLocation} from 'react-router-dom';
import { FaBars, FaCogs, FaPython, FaPhp, FaReact, FaVuejs, FaNodeJs, FaAngular, FaRobot, FaCloud, FaDatabase, FaPalette, FaChartLine, FaSearch, FaFileAlt, FaShareSquare, FaMixcloud } from 'react-icons/fa'; // Import necessary icons
import { CgWebsite } from "react-icons/cg";
import { SiJfrogpipelines, SiAmazonec2, SiAmazons3, SiAwslambda, SiAntdesign, SiWireshark } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TbDatabaseSearch,TbDatabaseShare } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import CustomImage from './CustomImage';
import ContactModal from '../contact/ContactModal';


const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState('web-development');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const servicesData = {
    'web-development': { 
      items: [
        {name: 'Python Development', icon: <FaPython size={70} />, href: '/services/python'},
        {name: 'PHP Development', icon: <FaPhp size={70} />},
        {name: 'React Js Development', icon: <FaReact size={70}  />}, 
        {name: 'Vue Js Development', icon: <FaVuejs size={70} />},
        {name: 'Node Js Development', icon: <FaNodeJs size={70}  />}, 
        {name: 'Angular Development', icon: <FaAngular size={70} />}
      ], 
      icon: <CgWebsite /> 
    },
    'devops-services': { 
      items: [
        {name: 'DevOps Pipeline', icon: <SiJfrogpipelines size={70} />},
        {name: 'CI/CD Integration', icon: <GrIntegration size={70} />}, 
        {name: 'Cloud Automation', icon: <FaMixcloud size={70} />}
      ], 
      icon: <FaCogs /> 
    },
    'aws-cloud-services': { 
      items: [
        {name:'AWS EC2', icon: <SiAmazonec2 size={70} />},
        {name :'AWS S3', icon: <SiAmazons3 size={70} />},
        { name: 'AWS Lambda', icon: <SiAwslambda size={70} />}
      ], 
      icon: <FaCloud /> 
    },
    'data-engineering-services': { 
      items: [
        {name:'Data Integration', icon: <BsDatabaseFillAdd size={70} />},
        {name: 'Data Visualization', icon: <TbDatabaseSearch size={70} />},
        {name: 'Data Migration', icon: <TbDatabaseShare size={70} />}
      ], 
      icon: <FaDatabase /> 
    },
    'web-designing': { 
      items: [
        {name: 'UI/UX Design', icon: <SiAntdesign size={70} />},
        {name:'Responsive Design', icon: <DiResponsive size={70} />},
        {name:'Wireframing', icon: <SiWireshark size={70} />}
      ], 
      icon: <FaPalette /> 
    },
    'digital-marketing': {
      items: [
        { name: 'SEO', icon: <FaSearch size={70} /> },
        { name: 'Content Marketing', icon: <FaFileAlt size={70} /> },
        { name: 'Social Media Marketing', icon: <FaShareSquare size={70} /> }
      ],
      icon: <FaChartLine />
    },
  };
  

  return (
    <>
      <div className="position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 sticky-top shadow-sm">
          <Link to="/" className={`navbar-brand p-0 ${pathname === '/' ? 'active' : ''}`}>
            <CustomImage
              alt="Logo"
              width="100%"
              height="100%"
              src="/logo.png"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
            <FaBars size={30} />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-item nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
              <div className="nav-item dropdown"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>
                <Link to="/service" className={`nav-link dropdown-toggle ${pathname === '/service' ? 'active' : ''}`} role="button">
                  Service
                </Link>
                {isServicesOpen && (
                <div className="services-dropdown">
                  <div className="services-grid">
                    <div className="services-column">
                    <Link to="/web-development" className={`dropdown-item ${hoveredService === 'web-development' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('web-development')}>
                        <CgWebsite  size={20} /> Web Development
                      </Link>
                      <Link to="/devops-services" className={`dropdown-item ${hoveredService === 'devops-services' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('devops-services')}>
                        <FaCogs  size={20} /> DevOps Services
                      </Link>
                      <Link to="/aws-cloud-services" className={`dropdown-item ${hoveredService === 'aws-cloud-services' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('aws-cloud-services')}>
                        <FaCloud size={20} /> AWS Cloud Services
                      </Link>
                      <Link to="/data-engineering-services" className={`dropdown-item ${hoveredService === 'data-engineering-services' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('data-engineering-services')}>
                        <FaDatabase size={20} /> Data Engineering Services
                      </Link>
                      <Link to="/web-designing" className={`dropdown-item ${hoveredService === 'web-designing' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('web-designing')}>
                        <FaPalette size={20} /> Web Designing
                      </Link>
                      <Link to="/digital-marketing" className={`dropdown-item ${hoveredService === 'digital-marketing' ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredService('digital-marketing')}>
                        <FaChartLine size={20} /> Digital Marketing
                      </Link>
                    </div>
                    <div className="services-column service-box-column">
                      {hoveredService && servicesData[hoveredService]?.items.map((service, index) => (
                        <Link key={index} href={service.href || '#'} className="service-box nav-link">
                          {service.icon && <span className="me-2">{service.icon}</span>} <br />
                          {service.name || service}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
                )}
              </div>
              <Link to="/portfolio" className={`nav-item nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
              <Link to="/contact" className={`nav-item nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
              <Link to="/career" className={`nav-item nav-link ${pathname === '/career' ? 'active' : ''}`}>
                Career
              </Link>
            </div>
            <button onClick={handleShowModal} className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
              Get Started
            </button>
          </div>
        </nav>
      </div>
      <ContactModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Header;
