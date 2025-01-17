import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import ModalSingIn from '../components/ModalSingIn/ModalSingIn';
import CardHome from '../components/CardHome/CardHome';

import styles from '../styles/Galleries.module.css';
import data from '../data/queens.example.json';

const Queens = () => {
  return (
    <div className={styles.bgHome}>
      <Head>
        <title>My Queens Club - Enjoy The Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ModalSingIn idModal='singIn' />
        <h5 className={`text-uppercase fw-bolder text-center py-5 ${styles.title}`}>Queens</h5>
      </header>

      <main className='mb-5 container-fluid'>
        <section className='row gx-0'>
          {
            data.map((info, index) => (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <CardHome {...info} />
              </div>
            ))
          }
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Queens;
