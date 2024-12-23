import React from 'react'
import {Link} from 'react-router-dom'

const CareerBanner = () => {
  return (
    <div className="position-relative p-0">
    <div className="py-5 bg-primary1 hero-header">
      <div className="container my-5 py-5 px-lg-5">
        <div className="row g-5 py-5">
          <div className="col-12 text-center">
            <h1 className="text-white animated slideInDown">Career</h1>
            <hr className="bg-white mx-auto mt-0" style={{width: 90}} />
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Career</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CareerBanner