import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './customerSupport.module.css';

const CustomerSupport = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={`container-fluid py-3 ${styles.bgHome}`}>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
        <h3 className="py-3">Atención al Cliente</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
              <input type="text" placeholder="Nombre" {...register('firstName', { required: true })} className={`form-control ${styles.inputStyle}`} id="inputName" />
            </div>
              {errors.firstName?.type === 'required' && <p className={`${styles.error}`}>* El nombre es requerido</p>}
            <div className="input-group mb-3">
              <span className={`input-group-text ${styles.icon}`}><i className="bi bi-at"></i></span>
              <input type="email" placeholder="Correo Electrónico" {...register('email', { required: true })} className={`form-control ${styles.inputStyle}`} id="inputEmail" />
            </div>
              {errors.email?.type === 'required' && <p className={`${styles.error}`}>* El email es requerido</p>}
            <div className="input-group mb-3">
              <span className={`input-group-text ${styles.icon}`}><i className="bi bi-person"></i></span>
              <input type="text" placeholder="Asunto" {...register('asunto', { required: true })} className={`form-control ${styles.inputStyle}`} id="inputAsunto" />
            </div>
              {errors.asunto?.type === 'required' && <p className={`${styles.error}`}>* El asunto es requerido</p>}
            <div className="input-group mb-3">
              <span className={`input-group-text ${styles.icon}`}><i className="bi bi-envelope align-items-start"></i></span>
              <textarea placeholder="Ingrese su mensaje" className={`form-control ${styles.inputStyle}`} {...register('message', { required: true })} id="inputMessage" rows="3"></textarea>
            </div>
              {errors.message && <p className={`${styles.error}`}>* El mensaje es requerido</p>}
            <div className='d-flex justify-content-end mb-3'>
              <button type="submit" className={styles.buttonForm}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
