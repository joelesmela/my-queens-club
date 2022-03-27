import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './cardhome.module.css';

const CardHome = ({ src, title, alt }) => {
  return (
    <div className='p-1 position-relative'>
      <Image src={src} alt={alt} height={1920} width={1200} layout="responsive" quality={100} priority className={styles.cardHome} />
      <div className='text-center position-absolute h-100 w-100 d-flex justify-content-center align-items-center top-0'>
        <div className='text-white'>
          <h4 className={`mb-4 ${styles.titleName}`}>{title}</h4>
          <button type="button" className={`btn btn-outline-light mt-1 ${styles.buttonStyle}`} >Ver Galerias</button>
        </div>
      </div>
    </div>
  );
};

CardHome.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardHome;
