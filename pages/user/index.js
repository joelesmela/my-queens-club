import React from 'react';
import userImg from '../../public/images/user.png';
import styles from '../../styles/Home.module.css';

function user() {
  return (
    <div className={ styles.controlUser }>
      <div className="text-center mb-5">
        <h5 className={ styles.title }>Editar cuenta</h5>
        <span className={ styles.text }>Bienvenido Patricio. En esta sección verás toda la información detallada de tú cuenta.</span>
      </div>
      <section className="d-flex justify-content-between border"> 
        <div className="d-flex flex-column border">
          <div className="">
            <div className="d-flex p-3 justify-content-around">
              <img src={userImg} alt="User" />
              <div className="d-flex flex-column">
                <span className={` ${styles.text} text-uppercase `}>Usuario</span>
                <span className={ styles.text }>coreoElectronico@gmail.com</span>
                <a className={` ${styles.text} text-end `} href="#">Cerrar sesión</a>
              </div>
            </div>
            <nav className="nav flex-column my-5">
              <a className="nav-link">
                <span className={ styles.title }>Editar cuenta</span>
              </a>
              <a className={`nav-link ${styles.text}`}>
                <span className={ styles.text }>Mis pedidos</span>
              </a>
              <a className={`nav-link ${styles.text}`}>
                <span className={ styles.text }>Método de pago</span>
              </a>
              <a className={`nav-link ${styles.text}`}>
                <span className={ styles.text }>Suscripciones</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="container-fluid border">
          <forms className="">
            <div className="d-flex justify-content-around mb-4">
              <div className="col-md-5">
                <label className={`form-label ${styles.formLabel}`}>Nombre</label>
                <input type="text" className={`form-control ${styles.formPlaceholder}`} id="nameUser" />
              </div>
              <div className="col-md-5">
                <label className={`form-label ${styles.formLabel}`}>Apellido</label>
                <input type="text" className={`form-control ${styles.formPlaceholder}`} id="lastNameUser" />
              </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="col-md-11 mb-4">
                <label className={`form-label ${styles.formLabel}`}>Nombre visible</label>
                <input type="text" className={`form-control ${styles.formPlaceholder}`} id="nameVisibleUser" aria-describedby="nameVisibleUser" />
                <div id="nameVisibleUser" class={`form-text fst-italic ${styles.formLabel}`}>Así será como se mostrará tu nombre en la sección de tú cuenta y en las valoraciones.</div>
              </div>
              <div className="col-md-11 mb-4">
                <label className={`form-label ${styles.formLabel}`}>Correo electrónico</label>
                <input type="email" className={`form-control ${styles.formPlaceholder}`} id="mailUser" />
              </div>
            </div>
          </forms>
        </div>
      </section>
    </div>
  )
}

export default user