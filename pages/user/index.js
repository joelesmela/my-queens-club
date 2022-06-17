import React from 'react';
import styles from '../../styles/Home.module.css';

const User = () => {
  return (
    <div className={ styles.controlUser }>
      <div className="text-center py-5">
        <h5 className={ styles.title }>Editar cuenta</h5>
        <span className={` text-normal ${styles.text} `}>Bienvenido Patricio. En esta sección verás toda la información detallada de tú cuenta.</span>
      </div>
      <section className="d-flex">
        <div className="border-end">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="mt-3 d-flex justify-content-between">
              <i className={`bi bi-person-circle ${styles.icoUser}`}></i>
              <div className="p-4 d-flex flex-column">
                <span className={` ${styles.text} text-uppercase `}>Usuario</span>
                <span className={ styles.text }>coreoElectronico@gmail.com</span>
                <a className={` ${styles.text} text-end `} href="#">Cerrar sesión</a>
              </div>
            </div>
            <div className="w-100">
              <nav className="nav flex-column mt-5">
                <a className={`nav-link ${styles.text}`} href="#">
                  <span className={ styles.title }>Editar cuenta</span>
                </a>
                <a className={`nav-link ${styles.text}`} href="#">
                  <span className={ styles.text }>Mis pedidos</span>
                </a>
                <a className={`nav-link ${styles.text}`} href="#">
                  <span className={ styles.text }>Método de pago</span>
                </a>
                <a className={`nav-link ${styles.text}`} href="#">
                  <span className={ styles.text }>Suscripciones</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
