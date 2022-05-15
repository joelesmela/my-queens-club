import React from 'react';
import userImg from '../../public/images/user.png';
import styles from '../../styles/Users.module.css';
// import classes from './index.module.css';

function user() {
  return (
    <div className={ styles.controlUser }>
      <section className="text-center">
        <h5 className={ styles.title }>Editar cuenta</h5>
        <span className={ styles.text }>Bienvenido Patricio. En esta sección verás toda la información detallada de tú cuenta.</span>
      </section>
      <section className="col-sm-10 col-md-3">
        <div className="d-flex p-3 justify-content-around">
          <img src={userImg} alt="User" />
          <div className="d-flex flex-column">
            <span className={` ${styles.text} text-uppercase `}>Usuario</span>
            <span className={` ${styles.text}`}>coreoElectronico@gmail.com</span>
            <a className={` ${styles.text} text-end `} href="#">Cerrar sesión</a>
          </div>
        </div>
        <nav className="nav flex-column my-5">
          <a className="nav-link">
            <span className={styles.title }>Editar cuenta</span>
          </a>
          <a className={`nav-link ${styles.text}`}>
            <span className={styles.text }>Mis pedidos</span>
          </a>
          <a className={`nav-link ${styles.text}`}>
            <span className={styles.text }>Método de pago</span>
          </a>
          <a className={`nav-link ${styles.text}`}>
            <span className={styles.text }>Suscripciones</span>
          </a>
        </nav>
      </section>
      <section className="col-9">

      </section>
    </div>
  )
}

export default user