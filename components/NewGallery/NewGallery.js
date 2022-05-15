/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Forms.module.css';

const NewGallery = () => {
  const [queen, setQueen] = useState([]);

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetch('http://localhost:8000/galleries', {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  const handleQueen = async () => {
    const response = await fetch('http://localhost:8000/queen');
    const json = await response.json();
    setQueen(json);
  };
  useEffect(() => {
    handleQueen();
  }, []);

  return (
    <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 pt-5">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Nombre de Queen</label>
        <select className={`form-select ${styles.placeholder}`} aria-label="Default select example" {...register('idQueen', { required: true })}>
          <option selected>Seleccione una Queen</option>
          {
            queen.map(x => <option key={x._id} value={x._id}>{x.name}</option>)
          }
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Nombre de la Galeria</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('galleryName', { required: true })} />
        {errors.exampleRequired && <span className={`${styles.title}`}>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Foto de Portada</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('coverPhotoGallery', { required: true })} />
        {errors.exampleRequired && <span className={`${styles.title}`}>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className={`form-label ${styles.title}`}>Precio de la Galeria</label>
        <input type="number" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('price', { required: true })} />
        {errors.exampleRequired && <span className={`${styles.title}`}>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className={`form-label ${styles.title}`}>Fotos de la Galeria</label>
        <input type="text" className={`form-control ${styles.placeholder}`} id="exampleInputEmail1" aria-describedby="emailHelp" {...register('photos', { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}
      </div>
      <div className="text-end">
        <button type="submit" className={`btn ${styles.button}`}>Crear Galeria</button>
      </div>
    </form>
  );
};

export default NewGallery;
