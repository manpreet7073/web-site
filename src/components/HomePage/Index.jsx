import React, { lazy, Suspense } from 'react';
import Image from 'rc-image';

// Lazy load components
const DynamicBanner = lazy(() => import('../Home/BannerSection'));
const DynamicAbout = lazy(() => import('../About/AboutContantSection'));
const DynamicSkills = lazy(() => import('../Home/SkillsSection'));
const DynamicService = lazy(() => import('../Home/ServiceSection'));
const DynamicNewsletter = lazy(() => import('../Home/NewsletterSection'));
const DynamicProjects = lazy(() => import('../Home/ProjectsSection'));
const DynamicTestimonialSection = lazy(() => import('../Home/TestimonialSection'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

const Index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicBanner />
      <DynamicSkills />
      <DynamicAbout PageName={'home'} />
      <DynamicService PageName={'home'} />
      <DynamicProjects />
      <DynamicTestimonialSection />
    </Suspense>
  );
};

export default Index;
