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
      <div className="container px-4 ">
        <Link href='/' passHref>
          <Image width={147.6} height={61} src='/images/logo.png' alt='logo' quality={100} />
        </Link>
        <button className={`navbar-toggler ${styles.buttonCollapse}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className={`fs-1 bi bi-justify ${styles.buttonCollIcon}`}></i>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-lg-0 text-end">
            <li className="nav-item">
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Lo nuevo</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/galleries' passHref>
                <a className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Galerías</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/queens' passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Queens</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Vídeos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Únete al club</span>
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <button type="button" className={`nav-link ${styles.buttonStyleGet} px-4 px-lg-3 mx-0 my-2 my-md-0 mx-lg-3`}>Empezar</button>
            </li>
            <li className="nav-item">
              {
                userData.accessToken
                  ? (
                    <div className="dropdown">
                      <button className={`nav-link dropdown-toggle ${styles.buttonDropdown} px-4 px-lg-3 mx-0 my-2 my-md-0 mx-lg-3`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul className={`dropdown-menu ${styles.dropdown}`} aria-labelledby="dropdownMenuButton1">
                        <li><span className={`nav-link ${styles.colorLink} px-0 px-lg-3`} href="/user">Mi cuenta</span></li>
                        <li><span className={`nav-link ${styles.colorLink} px-0 px-lg-3`} aria-current="page" onClick={logout}>Cerrar sesión</span></li>
                      </ul>
                    </div>
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
