import PropTypes from 'prop-types';
import styles from './ganeralmodal.module.css';

const GeneralModal = ({ children, id, className }) => {
  return (
    <div className={`modal fade ${className}`} id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content py-5 px-5 rounded-0 ${styles.modalStyle}`}>
          { children }
        </div>
      </div>
    </div>
  );
};

GeneralModal.propTypes = {
  children: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GeneralModal;
