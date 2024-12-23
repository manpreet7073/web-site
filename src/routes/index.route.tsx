import React from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Header = lazy(() => import('../components/core/Header'));
const Footer = lazy(() => import('../components/core/Footer'))
const Homepage = lazy(() => import('../pages/home'));
const Aboutpage = lazy(() => import('../pages/about'));
const Servicepage = lazy(() => import('../pages/service'));
const Portfoliopage = lazy(() => import('../pages/portfolio')); 
const Contactpage = lazy(() => import('../pages/contact'));
const Careerpage = lazy(() => import('../pages/career'));
// const Projectpage = lazy(() => import('../pages/project/page'));
// const Teampage = lazy(() => import('../pages/team/page'));
// const Testimonialpage = lazy(() => import('../pages/testimonial/page'));


const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/career" element={<Careerpage />} />
        {/*<Route path="/project" element={<Projectpage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/testimonial" element={<Testimonialpage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;