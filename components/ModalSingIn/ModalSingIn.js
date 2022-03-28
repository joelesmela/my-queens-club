import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './modalsingin.module.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

const ModalSingIn = ({ isRegister, idModal, activeRegister }) => {
  const [activeTab, setActiveTab] = useState(activeRegister);

  return (
    <>
    <div className="modal fade" id={idModal} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modal}`}>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className={`nav-item w-50 pe-2 ${isRegister ? 'd-none' : 'd-block'}`} role="presentation">
              <button className={`w-100 ${activeTab === 1 && styles.active} ${styles['tab-nav-link']}`} id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true" onClick={() => setActiveTab(1)}>Ingresar</button>
            </li>
            <li className={`nav-item ${!isRegister ? 'ps-2 w-50' : 'w-100'}`} role="presentation">
              <button className={`w-100 ${activeTab === 2 && styles.active} ${styles['tab-nav-link']}`} id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-controls="pills-register" aria-selected="false" onClick={() => setActiveTab(2)}>Registro</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className={`tab-pane fade pt-3 ${!isRegister ? 'show active' : null}`} id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab"><Login /></div>
            <div className={`tab-pane fade pt-3 ${isRegister ? 'show active' : null} `} id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab"><Register /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

ModalSingIn.propTypes = {
  isRegister: PropTypes.bool,
  idModal: PropTypes.string.isRequired,
  activeRegister: PropTypes.number,
};

ModalSingIn.defaultProps = {
  activeRegister: 1,
};

export default ModalSingIn;
