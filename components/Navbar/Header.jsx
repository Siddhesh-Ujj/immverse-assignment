// import React, { useEffect, useState } from "react";
// import styles from "./navbar.module.css"
// const Header = () => {
//   const [selected, setSelected] = useState(1);
//   useEffect(() => {
//     console.log(selected, "selected")

//     return () => {
//     }
//   }, [selected])

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark">
//       <div className="container">
//         <a className="navbar-brand" href="#">ImmverseAI</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className={`nav-link fs-6 pt-2 ${selected === 1 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(1) }}>Home</a>
//             </li>
//             <li className="nav-item">
//               <a className={`nav-link fs-6 pt-2 ${selected === 2 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(2) }}>Company</a>
//             </li>
//             <li className="nav-item">
//               <a className={`nav-link fs-6 pt-2 ${selected === 3 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(3) }}>Features</a>
//             </li>
//           </ul>
//           {/* <a className="btn btn-primary ms-3" href="#">Sign Up</a> */}
//           <button className="get-button ms-2">Sign Up</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css'; // Create this CSS module

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        {/* Logo */}
        {/* <div></div> */}
        <a className={`navbar-brand ${styles.logo}`} href="#">
          <div className={styles.logoIcon}>  <img src="/logo.png" alt="Video Preview 2" className="img-fluid" /></div> {/* Placeholder for your actual logo */}
        </a>

        {/* Navigation Links */}
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