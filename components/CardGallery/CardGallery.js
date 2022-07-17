import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './cardgallery.module.css';

const CardGallery = ({
  src, title, alt, galleryName, imageQuantity, price, gallery, id,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/gallery/${id}`);
  };

  return (
    <div className='p-1'>
      <div className={styles.cardGallery} onClick={handleClick}>
        <div className='position-relative'>
          <Image src={src} alt={alt} height={1920} width={1200} layout="responsive" quality={100} priority />
          <div className='text-white px-2 py-1 bg-dark bg-opacity-75 position-absolute bottom-0 end-0 d-flex'>
            <i className="bi bi-camera me-1" />
            <div className={styles.imageQuantity}>{imageQuantity}</div>
          </div>
        </div>
        <div className='px-3'>
          {
            !gallery
              ? (
                <>
                  <p className={`col-6 pt-3 pb-2 m-0 fw-normal fs-6 ${styles.titleName}`}>{galleryName}</p>
                  <p className={`text-secondary pt-1 pb-3 m-0 fw-light fs-6 ${styles.titleName}`}>{title}</p>
                </>
              )
              : (
                <>
                  <div className="row">
                    <p className={`col-6 pt-3 pb-2 m-0 fw-normal fs-6 ${styles.titleName}`}>{galleryName}</p>
                    <p className={`col-6 pt-3 pb-2 m-0 fw-light text-end ${styles.priceGallery}`}>${price} / mes</p>
                  </div>
                  <div className='row pb-3 pt-2'>
                    <div className='col-6'>
                      <p className={`text-secondary m-0 fw-light fs-6 ${styles.titleName}`}>{title}</p>
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center m-0'>
                      <button className={`btn ${styles.button}`}>Suscribete!</button>
                    </div>
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
  id: PropTypes.string.isRequired,
};

CardGallery.defaultProps = {
  gallery: false,
};

export default CardGallery;
