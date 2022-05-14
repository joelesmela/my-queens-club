import React from 'react';
import userImage from '../../public/images/user.png';
import styles from '../../styles/Users.module.css';

function user() {
  return (
    <div className={ styles.controlUser }>
      <section className="text-center">
        <h5 className={ styles.title }>Editar cuenta</h5>
        <span className={ styles.text }>Bienvenido Patricio. En esta sección verás toda la información detallada de tú cuenta.</span>
      </section>
      <section>
        <div className="d-flex">
          <div>
            <img src={userImage} alt="User" />
          </div>
          <div>
            <span>patricio.millan@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default user