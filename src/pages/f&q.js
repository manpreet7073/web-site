import React from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";


const DynamicFQblock = dynamic(() => import('@components/F&Q/F&qContantSection'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
  });
export default function fandq() {


  return (
    <>
        <DynamicFQblock />
    </>
  );
}
