import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './infosection.module.css';

const InfoSection = ({ className }) => {
  return (
    <div className={`container py-2 ${className}`}>
      <div className='row justify-content-between'>
        <div className={`col-sm-2 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
          <Link href="/" passHref>
            <span className={styles.infoText}>ATENCIÓN AL CIENTE</span>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-credit-card-2-back fs-1 ${styles.iconColor}`}></i>
          <Link href="/" passHref>
            <span className={styles.infoText}>MEDIOS DE PAGO</span>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-question-circle fs-1 ${styles.iconColor}`}></i>
          <Link href="/" passHref>
            <span className={styles.infoText}>PREGUNTAS FRECUENTES</span>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-person-fill fs-1 ${styles.iconColor}`}></i>
          <Link href="/" passHref>
            <span className={styles.infoText}>MI CUENTA</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  className: PropTypes.string.isRequired,
};

export default InfoSection;
