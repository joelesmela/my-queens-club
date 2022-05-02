import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './login.module.css';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await resp.json();
    localStorage.setItem('accessToken', json.accessToken);
    localStorage.setItem('user_name', json.name);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
          <input type="text" className={`form-control ${styles.placeholder}`} placeholder="Nombre de usuario / Correo electrónico" aria-label="Email" {...register('user', { required: true })}/>
          {errors.email && <span>Este campo es requerido</span>}
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control ${styles.placeholder}`} placeholder="Contraseña" aria-label="Password" {...register('password', { required: true })}/>
          {errors.password && <span>Este campo es requerido</span>}
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
