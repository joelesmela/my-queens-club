import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import styles from './register.module.css';

const Register = () => {
  const router = useRouter();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch('http://localhost:8000/user', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          role: 'client',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-at"></i></span>
          <input type="email" className={`form-control ${styles.placeholder}`} placeholder="Email" aria-label="Email" required {...register('email', { required: true })} />
          {errors.email && <span>Este campo es requerido</span>}
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-emoji-smile"></i></span>
          <input type="text" className={`form-control ${styles.placeholder}`} placeholder="Nombre de Usuario" aria-label="userName" required {...register('userName', { required: true })} />
          {errors.userName && <span>Este campo es requerido</span>}
        </div>
        <div className='d-block d-md-flex'>
          <div className="input-group mb-3 me-1">
            <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
            <input type="text" className={`form-control ${styles.placeholder}`} placeholder="Nombre" aria-label="Name" required {...register('name', { required: true })} />
            {errors.name && <span>Este campo es requerido</span>}
          </div>
          <div className="input-group mb-3 ms-1">
            <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
            <input type="text" className={`form-control ${styles.placeholder}`} placeholder="Apellido" aria-label="Lastname" required {...register('lastName', { required: true })} />
            {errors.lastName && <span>Este campo es requerido</span>}
          </div>
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control ${styles.placeholder}`} placeholder="Contraseña" aria-label="Password" required {...register('password', { required: true })} />
          {errors.password && <span>Este campo es requerido</span>}
        </div>
        <div className="input-group mb-3">
          <span className={`input-group-text ${styles.icon}`}><i className="bi bi-key"></i></span>
          <input type="password" className={`form-control ${styles.placeholder}`} placeholder="Confirmar contraseña" aria-label="confirmPassword" required />
          {errors.confirmPassword && <span>Este campo es requerido</span>}
        </div>
        <div className="mb-3 form-check">
          <input className={`form-check-input ${styles.checkBox}`} type="checkbox"/>
          <label className={`form-check-label ${styles.check}`} htmlFor="flexCheckChecked">Acepto los Términos y Políticas de Privacidad</label>
        </div>
        <button type="submit" className={`btn btn-primary w-100 ${styles.button}`}>REGISTRARME</button>
      </form>
    </>
  );
};

export default Register;
