import React from 'react';
import { useForm } from 'react-hook-form';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Queen</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name', { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Imagen de Portada</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('coverImage', { required: true })} />
        {errors.exampleRequired && <span>Este campo es requerido</span>}      </div>
      <button type="submit" className="btn btn-primary">Crear Queen</button>
    </form>
  );
};

export default NewQueen;
