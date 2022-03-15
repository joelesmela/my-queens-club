import Image from 'next/image';
import Link from 'next/link'
import styles from'./navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.bgNav}`}>
      <div class="container-fluid px-4 ">
        <div>
          <a className="navbar-brand" href="#">
            <Image className="w-25 d-inline-block" width={100} height={70} src='/images/logo.png' alt='logo'/>
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href='/'><a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Updates</a></Link>
            </li>
            <li className="nav-item">
              <Link href='/'><a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Galleries</a></Link>
            </li>
            <li className="nav-item">
              <Link href='/'><a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Films</a></Link>
            </li>
            <li className="nav-item">
              <Link href='/'><a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Queens</a></Link>
            </li>
            <li className="nav-item">
              <Link href='/'><a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Join the Club</a></Link>
            </li>
            <li className="nav-item">
              <button type="button" className={`nav-link ${styles.buttonStyleGet}`}>Get started</button>
            </li>
            <li className="nav-item">
              <button type="button" className={`nav-link ${styles.buttonStyle}`}>Sing In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
