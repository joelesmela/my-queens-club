import React from 'react';
import styles from './register.module.css';

const Register = () => {
  return (
    <div>
      <form className='bg-black'>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`} id="basic-addon1"><i className="bi bi-at"></i></span>
          <input type="email" className={`form-control text-white ${styles.placeholder}`} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
        </div>
        <div className='d-flex'>
          <div className="input-group mb-3 me-1">
            <span className={`input-group-text ${styles.icon}`} id="basic-addon1"><i className="bi bi-person"></i></span>
            <input type="text" className={`form-control text-white ${styles.placeholder}`} placeholder="Nombre" aria-label="Name" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3 ms-1">
            <span className={`input-group-text ${styles.icon}`} id="basic-addon1"><i className="bi bi-person"></i></span>
            <input type="text" className={`form-control text-white ${styles.placeholder}`} placeholder="Apellido" aria-label="Lastname" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`} id="basic-addon1"><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control text-white ${styles.placeholder}`} placeholder="Contraseña" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`} id="basic-addon1"><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control text-white ${styles.placeholder}`} placeholder="Confirmar contraseña" aria-label="confirmPassword" aria-describedby="basic-addon1" />
        </div>
        <div className="mb-3 form-check">
          <input className="form-check-input" type="checkbox" value="true" id="flexCheckChecked"/>
          <label className="form-check-label text-white" htmlFor="flexCheckChecked">Acepto los Términos y Políticas de Privacidad</label>
        </div>
        <button type="submit" className={`btn btn-primary w-100 ${styles.button}`}>REGISTRO</button>
      </form>
    </div>
  );
};

export default Register;
