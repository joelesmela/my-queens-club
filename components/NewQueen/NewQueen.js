import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Forms.module.css';

const NewQueen = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetch('http://localhost:8000/queen', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  return (
    <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Nombre de Queen</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name', { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className={`form-label ${styles.title}`}>Imagen de Portada</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('coverImage', { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}
      </div>
      <div className='text-end'>
        <button type="submit" className={`btn ${styles.button}`}>Crear Queen</button>
      </div>
    </form>
  );
};

export default NewQueen;
