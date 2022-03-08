import React from 'react';
import './footer.css';
import Image from 'next/image';
import facebook from '../../public/facebook.png';
import instagram from '../../public/instagram.png';
import logo from '../../public/logo.png';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-6 mb-4'>
            <h4 className='text-white m-3'>A definir</h4>
            <div className='row'>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Modelo 1</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Modelo 2</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Modelo 3</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-6'>
            <h4 className='text-white m-3'>A definir</h4>
            <div className='row'>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Galeria 1</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Galeria 2</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Galeria 3</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-7'>
            <h4 className='text-white m-3'>Términos y condiciones</h4>
            <div className='row'>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Políticas de privacidad</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Términos y condiciones</a>
              <a className='text-decoration-none color-link ms-3 mt-2' href='#'>Preguntas frecuentes</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-5 mt-3 align-items-center d-flex justify-content-center'>
            <Image src={logo} alt='My Queens Club' height='150' width='200' quality={100} />
          </div>
        </div>
        <div className='container'>
          <h3 className='text-center m-4 text-white'>Redes Sociales</h3>
          <div className='d-flex justify-content-center'>
            <a href="https://www.facebook.com/myqueensclub" target='_blank' rel='noreferrer' className='me-3'><Image src={facebook} alt='Facebook' height='40' width='40' quality={100} /></a>
            <a href="https://www.instagram.com/myqueensclub/?hl=es" target='_blank' rel='noreferrer' className='ms-3'><Image src={instagram} alt='Instagram' height='40' width='40' quality={100} /></a>
          </div>
        </div>
        <div className='row m-4'>
          <p className='col-lg-6 col-md-12 text-center text-white'>My Queens Club - Todos los derechos reservados © 2022</p>
          <p className='col-lg-6 col-md-12 text-center text-white'>Sitio web realizado por <a href="" className='text-decoration-none text-white'>Lager Devs</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
