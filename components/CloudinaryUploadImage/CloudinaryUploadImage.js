/* eslint-disable react-hooks/exhaustive-deps */
import Script from 'next/script';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const CloudinaryUploadImage = ({ onSave }) => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');

  const createMyWidget = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'lager-devs',
        uploadPreset: 'sq9ll37y',
      },
      (error, result) => {
        setImage(result.info.url);
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info.url);
        }
      },
    );

    return myWidget;
  };

  const handleClick = async () => {
    const data = await createMyWidget();
    data.open();
  };

  useEffect(() => {
    if (image) {
      setImages([
        ...images,
        image,
      ]);
    }
  }, [image]);

  useEffect(() => {
    onSave(images);
  }, [images]);

  return (
    <>
      <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" />

      <button onClick={handleClick}>Cargar</button>
    </>
  );
};

CloudinaryUploadImage.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default CloudinaryUploadImage;
