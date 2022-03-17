import styles from './infosection.module.css';
import Link from 'next/link';

const InfoSection = () => {
  return (
    <div className={`container-fluid py-2 ${styles.infoSectionContainer}`}>
      <div className='row justify-content-between'>
        <div className={`col-sm-2 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-chat-square-text fs-1 ${styles.iconColor}`}></i>
          <Link href="/">
            <spam className={styles.infoText}>ATENCIÓN AL CIENTE</spam>
          </Link>
        </div>
        <div className={`col-sm-2 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-cart4 fs-1 ${styles.iconColor}`}></i>
          <Link href="/">
            <spam className={styles.infoText}>COMO COMPRAR</spam>
          </Link>
        </div>
        <div className={`col-sm-2 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-credit-card-2-back fs-1 ${styles.iconColor}`}></i>
          <Link href="/">
            <spam className={styles.infoText}>MEDIOS DE PAGO</spam>
          </Link>
        </div>
        <div className={`col-sm-2 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center ${styles.box}`}>
          <i className={`bi bi-truck fs-1 ${styles.iconColor}`}></i>
          <Link href="/">
            <spam className={styles.infoText}>FORMAS DE ENVIO</spam>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
