import React from 'react';
import Link from 'next/link';
import styles from './infosubs.module.css';

const InfoSubs = () => {
  return (
    <div className={`container-fluid ${styles.bgInfoSubs}`}>
      <div className='row justify-content-between py-2'>
        <div className='col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center'>
          <Link href="/"><a class={`${styles.colorLink}`}><i class="bi bi-question-circle fs-5 pe-2"></i>¿Como me subscribo?</a></Link>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <div className={`d-none d-lg-block d-xl-none ${styles.simbol}`}/>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center'>
          <Link href="/" class=""><a class={`${styles.colorLink}`}><i class="bi bi-person-plus fs-5 pe-2"></i>Registrarme</a></Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSubs;
