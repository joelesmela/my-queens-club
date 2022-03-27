import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './infosubs.module.css';

const InfoSubs = ({ className }) => {
  return (
    <div className={`container-fluid w-100 w-md-50 ${className}`}>
      <div className='h-100 row d-flex justify-content-center align-items-center'>
        <div className='col-12 col-md-5 col-lg-4 d-flex justify-content-center'>
          <Link href="/"><a className={`d-flex align-items-center fs-5 ${styles.colorLink}`}><i className="bi bi-question-circle fs-1 pe-4"></i>¿CÓMO ME SUSCRIBO?</a></Link>
        </div>
        <div className={`d-none d-md-block ${styles.simbol}`}/>
        <div className='col-12 col-md-5 col-lg-4 d-flex justify-content-center'>
          <Link href="/"><a className={`d-flex align-items-center fs-5 ${styles.colorLink}`}><i className="bi bi-person-plus fs-1 pe-4"></i>REGISTRARME</a></Link>
        </div>
      </div>
    </div>
  );
};

InfoSubs.propTypes = {
  className: PropTypes.string.isRequired,
};

export default InfoSubs;
