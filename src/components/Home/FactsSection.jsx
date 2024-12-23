import React from 'react'
import { MdWorkHistory,MdLibraryBooks  } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { RiUserStarFill } from "react-icons/ri";


const FactsSection = () => {
  return (
    <div className="bg-primary1 fact py-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 px-lg-5">
      <div className="row g-4">
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
          <MdWorkHistory size={50} className="text-white mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">5+</h1>
          <p className="text-white mb-0">Years Experience</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
          <FaUsersGear size={50} className="text-white mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">25+</h1>
          <p className="text-white mb-0">Team Members</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
          <RiUserStarFill size={50} className="text-white mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">15+</h1>
          <p className="text-white mb-0">Satisfied Clients</p>
        </div>
        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
          <MdLibraryBooks  size={50} className="text-white mb-3" />
          <h1 className="text-white mb-2" data-toggle="counter-up">35+</h1>
          <p className="text-white mb-0">Compleate Projects</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FactsSection