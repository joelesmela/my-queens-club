import React from 'react';
import styles from './login.module.css';

const Login = () => {
  return (
      <form>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
          <input type="text" className={`form-control ${styles.placeholder}`} placeholder="Nombre de usuario / Correo electrónico" aria-label="Email" required />
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control ${styles.placeholder}`} placeholder="Contraseña" aria-label="Password" required/>
        </div>
        <div className='d-flex justify-content-between'>
          <div className="mb-3 form-check">
            <input className={`form-check-input ${styles.checkBox}`} type="checkbox"/>
            <label className={`form-check-label ${styles.remember}`} htmlFor="flexCheckChecked">Recuérdame</label>
          </div>
          <a className={`${styles.password}`}>¿Has olvidado la contraseña?</a>
        </div>
        <button type="submit" className={`btn btn-primary w-100 ${styles.button}`}>ACCEDER</button>
      </form>
  );
};

export default Login;
