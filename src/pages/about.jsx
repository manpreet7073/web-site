import React, { lazy, Suspense } from "react";
import Image from "rc-image";

// Lazy load components
const DynamicAboutContantSection = lazy(() => import('../components/About/AboutContantSection'));
const DynamicFactsSection = lazy(() => import('../components/Home/FactsSection'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

export default function Service() {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicAboutContantSection />
      <DynamicFactsSection />
    </Suspense>
  );
}
