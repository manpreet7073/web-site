import React from 'react'
import CustomImage from '../core/CustomImage'

const ProjectsSection = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <p className="section-title text-secondary justify-content-center"><span />Our Projects<span /></p>
        <h1 className="text-center mb-5">Recently Completed Projects</h1>
      </div>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <span className="mx-2 active" data-filter="*">All</span>
            <span className="mx-2" data-filter=".first">Web Design</span>
            <span className="mx-2" data-filter=".second">Graphic Design</span>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/dimo.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">DIMO Book Publishing</h5>
              <p className="fw-small mb-2">An easy-to-use system that manages the process of creating books simply, efficiently and cost-effectively </p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/allenunwin.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">Allen & Unwin</h5>
              <p className="fw-small mb-2">Allen & Unwin is Australia &apos;s leading independent publisher and is the 2023 Publisher of the Year. A&U have been voted &apos;Publisher of the Year&apos; fifteen times.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/murdoch.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">Murdoch Books</h5>
              <p className="fw-small mb-2">Murdoch Books is an Australian publisher, mainly of gardening and cook books. The company had its beginnings when The Advertiser of Adelaide started printing magazines.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/acc.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">Australian Copyright Council</h5>
              <p className="fw-small mb-2">Australian Copyright Council is an Australian non-profit organisation established in 1968 whose purpose is to promote understanding of copyright law in Australia.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/afraimpress.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">Affirm Press</h5>
              <p className="fw-small mb-2">Affirm Press publishes a broad range of non-fiction books and a select fiction list.</p>
              </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
              <CustomImage  height="100%" width="100%"className="img-fluid w-100" src="/projects/bankingquest.png" alt="" />
            </div>
            <div className="bg-light p-4 project-details">
              <h5 className="lh-base mb-0 main-cl">Banking Quest</h5>
              <p className="fw-small mb-2">Banking Quest aims to support the present and the aspiring bankers by updating their knowledge through the platform of this website.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectsSection