import React, { Suspense, lazy } from "react";
import Image from "rc-image";

// Lazy load the component
const DynamicCareerContant = lazy(() => import('../components/Career/CareerContant'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

export default function Career() {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicCareerContant />
    </Suspense>
  );
}

