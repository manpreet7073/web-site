import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";



import dynamic from 'next/dynamic'
import Image from "next/image";

const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
  loading: () => <>
  <div className="loader text-center">
  <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
</>
});


function MyApp({ Component, pageProps }) {
  return (
    <DynamicContainerBlock>
      <Component {...pageProps} />
    </DynamicContainerBlock>
  );
}

export default MyApp;
