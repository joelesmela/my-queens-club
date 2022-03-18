import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import logo from '../../public/logo.png';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-12 mb-4'>
            <h4 className='text-white m-3 text-center'>Susbríbete</h4>
            <div className='row'>
              <p className={`text-white mt-2 ${styles.text}`}>Reciba mensualmente todas las novedades de nuestras modelos directamente
                en su bandeja de entrada. También obtendrás ofertas exclusivas sólo disponibles
                a través de nuestros boletines.</p>
              <form>
                <div className="input-group">
                  <input type="email" className={`form-control text-white ${styles.placeholder}`} placeholder="Email" aria-label="Email" required />
                  <button type="submit" className={`input-group-text text-white ${styles.button}`}>Suscríbete</button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-12 mt-3 align-items-center d-flex justify-content-center'>
            <Image src={logo} alt='My Queens Club' height={150} width={200} quality={100} />
          </div>
        </div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-6'>
              <h4 className='text-white m-3 text-center'>Términos y condiciones</h4>
              <div className='row'>
                <a className={`text-decoration-none text-center m-2 ${styles.condition}`} href='#'>Políticas de privacidad</a>
                <a className={`text-decoration-none text-center m-2 ${styles.condition}`} href='#'>Términos y condiciones</a>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-6 MT-4'>
              <h4 className='text-center m-3 text-white'>Redes Sociales</h4>
              <div className='d-flex justify-content-center'>
                <a href="https://www.facebook.com/myqueensclub" target='_blank' rel='noreferrer' className={`m-2 pe-2 ${styles.icon}`}><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/myqueensclub/?hl=es" target='_blank' rel='noreferrer' className={`m-2 ps-2 ${styles.icon}`}><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='row m-4'>
          <p className='col-lg-6 col-md-12 text-center text-white'>My Queens Club - Todos los derechos reservados © 2022</p>
          <p className='col-lg-6 col-md-12 text-center text-white'>Sitio web realizado por <a href="https://www.lagerdevs.com/" className={`text-decoration-none ${styles.condition}`}>Lager Devs</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
