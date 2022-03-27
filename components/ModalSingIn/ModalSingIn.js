import { useState } from 'react';
import styles from './modalsingin.module.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

const ModelSingIn = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
    <Navbar />
    <div className="modal fade" id="singIn" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modal}`}>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item w-50 pe-2" role="presentation">
              <button className={`w-100 ${activeTab === 1 && styles.active} ${styles['tab-nav-link']}`} id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-login" type="button" role="tab" aria-controls="pills-login" aria-selected="true" onClick={() => setActiveTab(1)}>Ingresar</button>
            </li>
            <li className="nav-item w-50 ps-2" role="presentation">
              <button className={`w-100 ${activeTab === 2 && styles.active} ${styles['tab-nav-link']}`} id="pills-register-tab" data-bs-toggle="pill" data-bs-target="#pills-register" type="button" role="tab" aria-controls="pills-register" aria-selected="false" onClick={() => setActiveTab(2)}>Registro</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active pt-3" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab"><Login /></div>
            <div className="tab-pane fade pt-3" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab"><Register /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ModelSingIn;
