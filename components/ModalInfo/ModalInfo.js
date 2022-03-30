import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './modalinfo.module.css';

const ModalInfo = ({
  src, title, description, alt,
}) => {
  return (
    <>
    <div className="modal fade" id="modalInfo" tabIndex="-1" aria-labelledby="modalInfo" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modal}`}>
          <div className={`modal-header ${styles.line}`}>
            <h5 className={`modal-title ${styles.title}`} id="modalInfo">¿CÓMO ME SUSCRIBO?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={`modal-body ${styles.line}`}>
            <div className='d-flex'>
            <Image src={src} width={29.18} height={26} quality={100} alt={alt} priority/>
            <span className={`ps-2 ${styles.text}`}>{title}</span>
            </div>
            <p className={`pt-2 ${styles.text}`}>{description}</p>
          </div>
          <div className="text-end pt-3">
            <button type="button" className={`btn ${styles.btn}`} data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

ModalInfo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ModalInfo;
