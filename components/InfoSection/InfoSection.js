import styles from './infosection.module.css';
import Link from 'next/link';

const InfoSection = () => {
  return (
    <div className={`container py-2 ${styles.infoSectionContainer}`}>
      <div className='row justify-content-between'>
        <div className={`col-sm-2 col-md-6 col-lg-3 ${styles.box}`}>
          <Link href="/">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
              <span className={styles.infoText}>ATENCIÓN AL CIENTE</span>
            </div>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.box}`}>
          <Link href="/">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
              <span className={styles.infoText}>COMO COMPRAR</span>
            </div>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.box}`}>
          <Link href="/">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
              <span className={styles.infoText}>MEDIOS DE PAGO</span>
            </div>
          </Link>
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-3 ${styles.box}`}>
          <Link href="/">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
              <span className={styles.infoText}>FORMAS DE PAGO</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
