import React from 'react';
import styles from '../../styles/Home.module.css';
import classes from './editAccount.module.css';

const EditAccount = () =>{
  return(
     <div className="container">
      <forms className="d-flex align-items-center flex-column">
        <div className="col-11 d-flex justify-content-between mb-4">
          <div className="col-5">
            <label className={`form-label ${classes.formLabel}`}>Nombre</label>
            <input type="text" className={`form-control form-control-sm ${classes.formPlaceholder}`} id="nameUser" />
          </div>
          <div className="col-5">
            <label className={`form-label ${classes.formLabel}`}>Apellido</label>
            <input type="text" className={`form-control form-control-sm ${classes.formPlaceholder}`} id="lastNameUser" />
          </div>
        </div>
        <div className="col-11 mb-4">
          <label className={`form-label ${classes.formLabel}`}>Nombre visible</label>
          <input type="text" className={`form-control form-control-sm ${classes.formPlaceholder}`} id="nameVisibleUser" aria-describedby="nameVisibleUser" />
          <div id="nameVisibleUser" class={`form-text fst-italic ${classes.formLabel}`}>Así será como se mostrará tu nombre en la sección de tú cuenta y en las valoraciones.</div>
        </div>
        <div className="col-11 mb-4">
          <label className={`form-label ${classes.formLabel}`}>Correo electrónico</label>
          <input type="email" className={`form-control form-control-sm ${classes.formPlaceholder}`} id="mailUser" />
        </div>
        <div className="col-11 d-flex justify-content-center flex-column border p-3 m2 cardPassword">
          <h5 className={ classes.text }>Cambio de contraseña</h5>
          <div className="card-body">
            <div className="mb-4">
              <label className={`form-label ${styles.formLabel}`}>Contraseña actual</label>
              <input type="password" className={`form-control form-control-sm ${styles.formPlaceholder}`} id="passOld" aria-describedby="passOldHelp" />
              <div id="passOldHelp" class={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
            </div>
            <div className="mb-4">
              <label className={`form-label ${styles.formLabel}`}>Contraseña nueva</label>
              <input type="password" className={`form-control form-control-sm ${styles.formPlaceholder}`} id="passNew" aria-describedby="passNewHelp" />
              <div id="passNewHelp" class={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
            </div>
            <div className="mb-4">
              <label className={`form-label ${styles.formLabel}`}>Confirmar nueva contraseña</label>
              <input type="password" className={`form-control form-control-sm ${styles.formPlaceholder}`} id="passRepeat" aria-describedby="passRepeatHelp" />
              <div id="passRepeatHelp" class={`form-text fst-italic ${styles.formLabel}`}>Dejar en blanco para no cambiar.</div>
            </div>
          </div>
        </div>
        <div className="w-100 me-5 text-end">
          <input className={`btn ${classes.button}`} type="submit" value="Guardar cambios" />
        </div>
      </forms>
     </div> 
  );
};

export default EditAccount;
