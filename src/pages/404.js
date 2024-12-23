import styles from '../styles/error.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import Image from 'next/image';
const DynamicContainerBlock = dynamic(() => import('@components/ContainerBlock'), {
    loading: () => <>
        <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
        </div>
    </>
});
export default function Custom404() {
    return (
        <>
        <DynamicContainerBlock>
        <section className={`${styles.page_404}`}>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 ">
                    <div className={`col-sm-10 col-sm-offset-1  text-center ${styles.pd_100}`}>
                    <div className={styles.four_zero_four_bg}>
                        <h1 className="text-center">404</h1>
                    </div>
                    <div className={styles.contant_box_404}>
                        <h3 className="h2 mb-5">Look like you re lost</h3>
                        <p>the page you are looking for not avaible!</p>
                        <Link href="/" className={styles.link_404}>
                        Go to Home
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </DynamicContainerBlock>
        <style jsx>{`
        .black-bg {
          background-color: black;
          color: white; /* Set text color to white for better visibility */
        }
      `}</style>
      </>
      
    );
}