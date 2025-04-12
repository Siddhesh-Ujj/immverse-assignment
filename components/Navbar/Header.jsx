
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css'; // Create this CSS module

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        {/* <div></div> */}
        <a className={`navbar-brand ${styles.logo}`} href="#">
          <div className={styles.logoIcon}>  <img src="/logo.png" alt="Video Preview 2" className="img-fluid" /></div> {/* Placeholder for your actual logo */}
        </a>

        <div className="collapse navbar-collapse justify-content-left " id="navbarNav">
          <ul className="navbar-nav border rounded-5 pt-2 border-white">
            <li className={`nav-item border rounded-5 border-white ${styles.navItem}`}>
              <a className={`nav-link active ${styles.navLink}`} href="#">Pricing</a>
            </li>
            <li className={`nav-item border rounded-5 border-white ${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="#">Insights</a>
            </li>
            <li className={`nav-item border rounded-5 border-white ${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="#">Affiliates</a>
            </li>
            <li className={`nav-item border rounded-5 border-white ${styles.navItem}`}>
              <a className={`nav-link ${styles.navLink}`} href="#">Guide</a>
            </li>
            <li className={`nav-item d-none border rounded-5 border-white ${styles.navItem}`}>
              {/* <a className={`nav-link ${styles.navLink}`} href="#">Guide</a> */}
            </li>
          </ul>
        </div>

        {/* Learn More Button */}
        {/* <button className={`btn btn-primary rounded-pill ${styles.learnMoreButton}`}>
          Learn More &gt;
        </button> */}
        <button className="button">
          Learn More &gt;
          <div className="hoverEffect">
            <div></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Header;