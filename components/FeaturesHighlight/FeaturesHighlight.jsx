// components/FeaturesHighlight.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeaturesHighlight.module.css'; // Create this CSS module

const FeaturesHighlight = () => {
  return (
    <div className={`bg-dark text-white py-5 text-center ${styles.mainContainer}`}>
      <div className="container">
        <p className={`text-muted mb-2 ${styles.featuresTag}`}>- Features -</p>
        <h2 className={`display-5 fw-bold mb-3 ${styles.mainHeading}`}>
          Your go-to tool for crafting <span className={styles.aiHighlight}>viral Shorts</span> using <span className={styles.aiHighlight}>AI</span>.
        </h2>
        <p className="lead mb-4">
          Produce an endless number of short videos simultaneously. Automatically generate captions, effects, backgrounds, and music for you.
        </p>
        <div className={styles.buttonGroup}>
          <button className={`btn btn-primary btn-lg rounded-pill me-3 ${styles.tryNowButton}`}>
            Try now &gt;
          </button>
          <button className={`btn btn-outline-light btn-lg rounded-pill ${styles.learnMoreButton}`}>
            Learn more &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHighlight;