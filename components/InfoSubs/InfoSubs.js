import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './infosubs.module.css';
import ModalSingIn from '../ModalSingIn/ModalSingIn';

const InfoSubs = ({ className }) => {
  return (
    <div className={`container-fluid w-100 w-md-50  ${className}`}>
      <div className='h-100 row d-flex justify-content-center align-items-center'>
        <div className='col-12 col-md-5 col-lg-4 d-flex justify-content-center'>
          <Link href="/"><a className={`d-flex align-items-center fs-5 ${styles.colorLink}`}><i className="bi bi-question-circle fs-1 pe-4"></i>¿CÓMO ME SUSCRIBO?</a></Link>
        </div>
        <div className={`d-none d-md-block ${styles.simbol}`}/>
        <div className='col-12 col-md-5 col-lg-4 pt-4 pt-md-0 pt-lg-0 d-flex justify-content-center'>
          <a className={`d-flex align-items-center fs-5 ${styles.colorLink}`} data-bs-toggle="modal" data-bs-target="#register"><i className="bi bi-person-plus fs-1 pe-4"></i>REGISTRARME</a>
          <ModalSingIn isRegister idModal='register' activeRegister={2}/>
        </div>
      </div>
    </div>
  );
};

InfoSubs.propTypes = {
  className: PropTypes.string.isRequired,
};

export default InfoSubs;
