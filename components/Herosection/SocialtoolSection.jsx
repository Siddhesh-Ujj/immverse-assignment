import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SocialtoolSection = () => {
  return (
    <div className=" text-white py-5" style={{ background: "#1e1e2e" }}>
      <div className="container text-center">
        <p className=" mb-1 text-center "><label className='border rounded-5 p-2 border-white bg-white bg-opacity-25'>- Social Tools -</label></p>
        <h1 className="display-4 fw-bold">Powerful tool for <br /> boosting social media growth</h1>
        <p className="lead mt-3">Produce unlimited short videos simultaneously with automatic generation <br />of captions, effects, backgrounds, and music.</p>
        {/* <button className="btn btn-primary btn-lg rounded-pill mt-4">Start 7 Days Trial &gt;</button> */}
        <button className="button">
          Try now &gt;
          <div className="hoverEffect">
            <div></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialtoolSection;