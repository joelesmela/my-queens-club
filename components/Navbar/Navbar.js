import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.bgNav}`}>
      <div className="container px-4 ">
        <a className="navbar-brand" href="#">
          <Image width={142.1} height={61} src='/images/logo.png' alt='logo' quality={100} />
        </a>
        <button className={`navbar-toggler ${styles.buttonCollapse}`}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class={`fs-1 bi bi-justify ${styles.buttonCollIcon}`}></i>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Actualizaciones</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Galerias</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Videos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Queens</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`}>Únete al club</span>
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className={`nav-link ${styles.buttonStyleGet} px-4 mx-0 mx-md-3 my-2 my-md-0`}>Empezar</button>
            </li>
            <li className="nav-item">
              <Link href="./">
                <span className={`nav-link ${styles.colorLink} px-0 px-md-3`} aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#singIn">iniciar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
