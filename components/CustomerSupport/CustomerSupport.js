import React from 'react'
import styles from './customerSupport.module.css'
import { useForm } from "react-hook-form";

function CustomerSupport() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={`container-fluid py-3 ${styles.bgHome}`}>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label for="inputName" className={`form-label ${styles.text}`}>Nombre</label>
              <input type="text" {...register("firstName", { required: true })}  className={`form-control ${styles.inputStyle}`} id="inputName" aria-describedby="Ingresa tu nombre"/>
              {errors.firstName?.type === 'required' && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El nombre es requerido</span>}
            </div>
            <div className="mb-3">
              <label for="inputEmail" className={`form-label ${styles.text}`}>Email</label>
              <input type="email" {...register("email", { required: true })} className={`form-control ${styles.inputStyle}`} id="inputEmail" aria-describedby="Email"/>
              {errors.email?.type === 'required'  && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El email es requerido</span>}
            </div>
            <div className="mb-3">
              <label for="inputAsunto" className={`form-label ${styles.text}`}>Asunto</label>
              <input type="text" {...register("asunto", { required: true })}  className={`form-control ${styles.inputStyle}`} id="inputAsunto" aria-describedby="Ingresa tu Instagram"/>
              {errors.asunto?.type === 'required' && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El asunto es requerido</span>}
            </div>
            <div className="mb-3">
            <label for="inputMessage" className={`form-label ${styles.text}`}>Mensaje</label>
              <textarea className={`form-control ${styles.inputStyle}`} {...register("message", { required: true })}  id="inputMessage" rows="3"></textarea>
              {errors.message && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El mensaje es requerido</span>}
            </div>
            <div className='d-flex justify-content-end mb-3'>
              <button type="submit" className={styles.buttonForm}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport
