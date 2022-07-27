import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../../context/userContext';

import styles from './navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  const { userData, flagReload, setFlagReload } = useUser();

  const logout = () => {
    localStorage.clear();
    setFlagReload(!flagReload);
    router.push('/');
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNav}`}>
      <div className={`container-fluid d-flex justify-content-between ${styles.containerNav}`}>
        <Link href='/' passHref>
          <Image className={styles.linkImage} width={147.6} height={61} src='/images/logo.png' alt='logo' quality={100} />
        </Link>
        <button className={`navbar-toggler ${styles.buttonCollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className={`fs-1 bi bi-justify ${styles.buttonCollIcon}`}></i>
        </button>
        <div className={`collapse navbar-collapse flex-grow-0 ${styles.collapseMenu}`} id="navbarCollapse">
          <ul className={`navbar-nav d-flex ${styles.navCollapse} mb-2 mb-lg-0 text-end`}>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Lo nuevo</span>
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href='/galleries' passHref>
                <a className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Galerías</a>
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href='/queens' passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Queens</span>
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Vídeos</span>
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/join" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Únete al club</span>
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <button type="button" className={`nav-link ${styles.buttonStyleGet} px-4 px-lg-3 mb-3 mb-lg-0 me-0 me-lg-3`}>Empezar</button>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              {
                userData.accessToken
                  ? (
                    <div className="dropdown">
                      <button className={`nav-link dropdown-toggle ${styles.buttonDropdown} px-5 px-lg-3`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul className={`dropdown-menu ${styles.dropdown}`} aria-labelledby="dropdownMenuButton1">
                        <li>
                          <Link className="nav-link" href="/user" passHref>
                            <span className={`${styles.colorLink} m-3`}>Mi cuenta</span>
                          </Link>
                        </li>
                        <li>
                          <span className={`${styles.colorLink} m-3`} aria-current="page" onClick={logout}>Cerrar sesión</span>
                        </li>
                      </ul>
                    </div>
                    // <>
                    //   <div className="btn-group dropstart">
                    //     <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    //       Dropstart
                    //     </button>
                    //     <ul className="dropdown-menu">
                    //     </ul>
                    //   </div>

                    //   <div className="btn-group">
                    //     <div className="btn-group dropstart" role="group">
                    //       <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    //         <span className="visually-hidden">Toggle Dropstart</span>
                    //       </button>
                    //       <ul className="dropdown-menu">
                    //         <li></li>
                    //       </ul>
                    //     </div>
                    //     <button type="button" className="btn btn-secondary">
                    //       Split dropstart
                    //     </button>
                    //   </div>

                    //   <div class="btn-group dropend">
                    //     <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    //       Dropright
                    //     </button>
                    //     <ul class="dropdown-menu">
                    //     </ul>
                    //   </div>
                    // </>
                  )
                  : (
                      <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`} aria-current="page" data-bs-toggle="modal" data-bs-target="#singIn" >Iniciar sesión</span>
                  )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
