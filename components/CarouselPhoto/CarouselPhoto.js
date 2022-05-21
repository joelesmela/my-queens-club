/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CloudinaryUploadImage from '../CloudinaryUploadImage/CloudinaryUploadImage';
import styles from '../../styles/Forms.module.css';

const CarouselPhoto = () => {
  const [queen, setQueen] = useState([]);
  const [coverImage, setCoverImage] = useState('');

  const {
    register, handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    await fetch('http://localhost:8000/carousel', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        coverImage,
      }),
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

  const handleCoverImage = (arrayImages) => {
    setCoverImage(arrayImages);
  };

  useEffect(() => {
    handleQueen();
  }, []);

  return (
    <form className="col-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 pt-5">
        <label className={`form-label ${styles.title}`}>Nombre de Queen</label>
        <select className={`form-select ${styles.placeholder}`} {...register('idQueen', { required: true })}>
          <option selected>Seleccione una Queen</option>
          {
            queen.length > 0 && queen.map(x => <option key={x._id} value={x._id}>{x.name}</option>)
          }
        </select>
      </div>
      <div className="mb-3">
        <CloudinaryUploadImage onSave={handleCoverImage} label="Cargar foto de Carousel para escritorio" />
      </div>
      <div className="mb-3">
        <CloudinaryUploadImage onSave={handleCoverImage} label="Cargar foto de Carousel para celular" />
      </div>
      <button type="submit" className="btn btn-primary">Crear Foto de Carousel</button>
    </form>
  );
};

export default CarouselPhoto;
