import Image from 'next/image';
import styles from'./navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgNav}`}>
      <div className="container-fluid d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="#">
            <Image className="w-25 d-inline-block" width={100} height={70} src='/images/logo.png' alt='logo'/>
          </a>
        </div>
        <div className="d-flex justify-content-center" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
              <li>
                <button type="button" className="btn btn-success">Success</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-success">Success</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;