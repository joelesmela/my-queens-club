import Image from 'next/image';
import styles from'./navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgNav}`}>
      <div class="container-fluid px-4 ">
        <div>
          <a className="navbar-brand" href="#">
            <Image className="w-25 d-inline-block" width={100} height={70} src='/images/logo.png' alt='logo'/>
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink}`} href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink}`} href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.colorLink}`} href="#">Disabled</a>
            </li>
            <li>
              <button type="button" className={`d-sm-block d-lg-none ${styles.buttonStyle}`}>Ingresar</button>
            </li>
          </ul>
        </div>
        <div>
          <button type="button" className={`d-none d-lg-block ${styles.buttonStyle}`}>Ingresar</button>
        </div>
      </div>
    </nav>
    // <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgNav}`}>
    //   <div className="container-fluid px-5">
        
    //       <a className="navbar-brand" href="#">
    //         <Image className="w-25 d-inline-block" width={100} height={70} src='/images/logo.png' alt='logo'/>
    //       </a>
        
    //     <div>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className={`nav-link ${styles.colorLink}`} aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={`nav-link ${styles.colorLink}`} href="#">Features</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={`nav-link ${styles.colorLink}`} href="#">Pricing</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={`nav-link ${styles.colorLink}`} href="#">Disabled</a>
    //           </li>
    //           <li>
    //             <button type="button" className={`d-sm-block d-lg-none ${styles.buttonStyle}`}>Ingresar</button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div>
    //       <button type="button" className={`d-none d-lg-block ${styles.buttonStyle}`}>Ingresar</button>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;