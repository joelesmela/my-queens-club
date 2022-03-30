import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import ModalSingIn from '../components/ModalSingIn/ModalSingIn';

import styles from '../styles/Terms.module.css';
import data from '../data/terms.json';

const Terms = () => {
  return (
    <div className={styles.bgHome}>
      <Head>
        <title>My Queens Club - Enjoy The Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ModalSingIn idModal='singIn' />
        <h5 className={`text-uppercase fw-bolder text-center py-5 ${styles.title}`}>TÉRMINOS Y CONDICIONES</h5>
      </header>

      <main className='mb-5 container-fluid'>
        <section>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.presentation}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title1}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par1}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title2}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par2}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title3}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par3}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par3a}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par3b}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par3c}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title4}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par4}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title5}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par5}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title6}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par6}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par6a}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par6b}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par6c}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par6d}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title7}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par7}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title8}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par8}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title9}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par9}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title10}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par10}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title11}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par11}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title12}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par12}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title13}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par13}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title14}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par14}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title15}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par15}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par15a}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title16}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par16}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title17}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par17}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.title18}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par18}</p>
          <p className={`m-4 px-3 ${styles.terms}`}>{data.par18a}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
