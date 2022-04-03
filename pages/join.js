import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import ModalSingIn from '../components/ModalSingIn/ModalSingIn';
import { useForm } from "react-hook-form";

import styles from '../styles/join.module.css';

const Join = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className={styles.bgHome}>
      <Head>
        <title>My Queens Club - Únete al club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ModalSingIn idModal='singIn' />
        <h5 className={`text-uppercase fw-bolder text-center py-5 ${styles.text}`}>Únete al club</h5>
      </header>

      <main className='mb-5 container'>
        <div className='d-flex flex-column'>
          <h2 className={`${styles.text}`}>DESEAS FORMAR PARTE DE NUESTRO STAFF?</h2>
          <h3 className={`mt-3 ${styles.formTitle}`}>Requisitos</h3>
          <div className='d-flex align-items-center'>
            <i className={`bi bi-check-lg ${styles.icon}`}></i>
            <span className={`fw-bold mx-1 ${styles.text}`}>Ser mayor de 18 años</span>
          </div>
          <div className='d-flex align-items-center'>
            <i className={`bi bi-check-lg ${styles.icon}`}></i>
            <span className={`fw-bold mx-1 ${styles.text}`}>Actitud</span>
          </div>
          <div className='d-flex align-items-center'>
            <i className={`bi bi-check-lg ${styles.icon}`}></i>
            <span className={`fw-bold mx-1 ${styles.text}`}>Compromiso</span>
          </div>
        </div>
        <h3 className={`my-3 ${styles.formTitle}`}>Formulario de contacto</h3>
        <section>
         <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column mb-3 justify-content-center'>

              <label for="inputName" className={`form-label ${styles.text}`}>Nombre</label>
              <input type="text" {...register("firstName", { required: true })}  className="form-control" id="inputName" aria-describedby="Ingresa tu nombre"/>
              {errors.firstName?.type === 'required' && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El nombre es requerido</span>}

              <label for="inputAge" className={`form-label ${styles.text}`}>Edad</label>
              <input type="text" {...register("age", { min: 18 }, { required: true })}  className="form-control" id="inputAge" aria-describedby="Ingresa tu edad"/>
              {errors.age?.type === 'required'  && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> La edad es requerida</span>}
              {errors.age?.type === 'min'  && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> Debes tener almenos 18 años</span>}

              <label for="inputInstagram" className={`form-label ${styles.text}`}>Instagram</label>
              <input type="text" {...register("instagram", { required: true })}  className="form-control" id="inputInstagram" aria-describedby="Ingresa tu Instagram"/>
              {errors.instagram?.type === 'required' && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> Instagram es requerido</span>}

            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column mb-3 justify-content-center'>

              <label for="lastName" className={`form-label ${styles.text}`}>Apellido</label>
              <input type="text" {...register("lastName", { required: true })} className="form-control" id="lastName"/>
              {errors.lastName && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El apellido es requerido</span>}

              <label for="inputHeight" className={`form-label ${styles.text}`}>Altura</label>
              <input type="text" {...register("height", { required: true })} className="form-control" id="inputHeight"/>
              {errors.height && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> La altura es requerida</span>}
              
              <label for="inputTelephone" className={`form-label ${styles.text}`}>Teléfono</label>
              <input type="tel" {...register("telephone", { required: true })} className="form-control" id="inputTelephone"/>
              {errors.lastName && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El telefono es requerido</span>}

            </div>
            <div className='col-sm-12 col-md-12 col-lg-12 d-flex flex-column mb-3 justify-content-center'>
              
              <label for="inputMessage" className={`form-label ${styles.text}`}>Mensaje</label>
              <textarea className="form-control"{...register("message", { required: true })}  id="inputMessage" rows="3"></textarea>
              {errors.message && <span className={`${styles.error}`}><i className="bi bi-exclamation-triangle"></i> El mensaje es requerido</span>}
              
            </div>
          </div>
          <div className='d-flex justify-content-end mb-3'>
            <button type="submit" className={styles.buttonForm}>Submit</button>
          </div>
        </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Join;