import React from "react";
import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicPrivacyPolicySection = dynamic(() => import('@components/privacy-policy/PrivacyPolicy'), {
  loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
export default function Privacy() {
  return (
    <>
        <DynamicPrivacyPolicySection />
    </>
  );
}
