import React from 'react';
import Link from 'next/link';
import styles from './infosubs.module.css';

const InfoSubs = () => {
  return (
    <div className={`d-flex justify-content-around ${styles.bgInfoSubs}`}>
      <div>
        <Link href="/"><a class={`px-3 ${styles.colorLink}`}><i class="bi bi-question-circle fs-5 pe-2"></i>¿Como me subscribo?</a></Link>
      </div>
      <div className={styles.simbol}>
      </div>
      <div>
        <Link href="/" class=""><a class={`px-3 ${styles.colorLink}`}><i class="bi bi-person-plus fs-5 pe-2"></i> Registrarme</a></Link>
      </div>
    </div>
  );
};

export default InfoSubs;
