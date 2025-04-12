import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HeroSection = () => {
  return (
    <div className=" text-white py-5" style={{ background: "#1e1e2e" }}>
      <div className="container text-center">
        <p className=" mb-1 text-center "><label className='border rounded-5 p-2 border-white bg-white bg-opacity-25'>- Unlock Your Creative Potential -</label></p>
        <h1 className="display-4 fw-bold">Fastest & Easiest Way <br /> to Generate Short Videos</h1>
        <p className="lead mt-3">Generate unlimited short videos at once with automatic <br /> captions, effects, backgrounds, and music.</p>
        {/* <button className="btn btn-primary btn-lg rounded-pill mt-4">Start 7 Days Trial &gt;</button> */}
        <button className="button">
          Start 7 Days Trial &gt;
          <div className="hoverEffect">
            <div></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;