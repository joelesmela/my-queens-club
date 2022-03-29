import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './cardgallery.module.css';

const CardGallery = ({
  src, title, alt, galleryName, imageQuantity, price, gallery,
}) => {
  return (
    <div className='p-1'>
      <div className={styles.cardGallery}>
        <div className='position-relative'>
          <Image src={src} alt={alt} height={1920} width={1200} layout="responsive" quality={100} priority />
          <div className='text-white px-2 py-1 bg-dark bg-opacity-75 position-absolute bottom-0 end-0 d-flex'>
            <i className="bi bi-camera me-1" />
            <div className={styles.imageQuantity}>{imageQuantity}</div>
          </div>
        </div>
        <div className='px-3'>
          <p className={`pt-3 pb-2 m-0 fw-normal fs-6 ${styles.titleName} ${gallery ? 'text-center' : 'text-start'}`}>{galleryName}</p>
          {
            !gallery
              ? <p className={`text-secondary pt-1 pb-3 m-0 fw-light fs-6 ${styles.titleName}`}>{title}</p>
              : (
                <>
                  <p className={`text-secondary text-center pt-1 pb-3 m-0 fw-light fs-6 ${styles.titleName}`}>{title}</p>
                  <p className={`pt-1 pb-3 m-0 fw-light text-center ${styles.priceGallery}`}>${price} / mes durante un mes</p>
                  <div className='d-flex justify-content-center pb-3'>
                    <button className={`btn ${styles.button}`}>Suscribete</button>
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

CardGallery.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  imageQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  gallery: PropTypes.bool,
};

CardGallery.defaultProps = {
  gallery: false,
};

export default CardGallery;
