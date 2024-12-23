import React, { lazy, Suspense } from 'react';
import Image from 'rc-image';

const DynamicIndex = lazy(() => import('../components/HomePage/Index'));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="loader text-center">
          <Image
            src="/loding.png"
            width={50}
            height={50}
            alt="Loader"
            className="loader-image"
          />
        </div>
      }
    >
      <DynamicIndex />
    </Suspense>
  );
};

export default Home;
