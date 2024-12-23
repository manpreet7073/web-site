import { useState, useEffect } from 'react';
import Head from "next/head";
import Script from 'next/script';
import { useRouter } from "next/router";
import { BiSolidUpvote } from "react-icons/bi";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./core/Header'), {
  loading: () => (
    <div className="loader text-center">
      <Image src="/loading.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
  ),
});

const DynamicFooter = dynamic(() => import('./core/Footer'), {
  loading: () => (
    <div className="loader text-center">
      <Image src="/loading.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
  ),
});

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const meta = {
    title: "Rayonweb solutions",
    description: "Rayonweb Solutions: Your trusted partner for innovative web development, design, and digital marketing services. Enhance your online presence with our expert solutions.",
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WWMQHW27');
        `}
      </Script>
      <main className="">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WWMQHW27`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <DynamicHeader />
        <div>{children}</div>
        <DynamicFooter />
        <div className="back-to-top-btn" style={{ display: showBtn ? 'block' : 'none' }}>
          <BiSolidUpvote className='active' size={50} onClick={handleClick} />
        </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" strategy="lazyOnload" />
    </div>
  );
}
