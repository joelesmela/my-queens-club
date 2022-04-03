import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNav}`}>
      <div className="container px-4 ">
        <Link href='/' passHref>
          <a>
            <Image width={147.6} height={61} src='/images/logo.png' alt='logo' quality={100} />
          </a>
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
              <Link href='/galleries' >
                <a className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Galerías</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/queens' >
                <a className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Queens</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`}>Vídeos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/join" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Únete al club</span>
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-end">
              <button type="button" className={`nav-link ${styles.buttonStyleGet} px-4 px-lg-3 mx-0 my-2 my-md-0 mx-lg-3`}>Empezar</button>
            </li>
            <li className="nav-item">
              <Link href="/" passHref>
                <span className={`nav-link ${styles.colorLink} px-0 px-lg-3`} aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#singIn">Iniciar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
