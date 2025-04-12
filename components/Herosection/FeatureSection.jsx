import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const FeatureSection = () => {
  return (
    <div className=" text-white py-5" style={{ background: "#1e1e2e" }}>
      <div className="container text-left">
        <p className=" mb-1 text-left "><label className='border rounded-5 p-2 border-white bg-white bg-opacity-25'>- Feature -</label></p>
        <h1 className="display-4 fw-bold">Your go-to tool for crafting <br /> viral Shorts using AI</h1>
        <p className="lead mt-3">Produce an endless number of short videos instantly simultaneously, Automatically,<br /> generate captions, effects, backgrounds, and music.</p>
        {/* <button className="btn btn-primary btn-lg rounded-pill mt-4">Start 7 Days Trial &gt;</button> */}
        <div>
          <button className="button">
            Try now &gt;
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
          <button className="button  rounded-5 mx-4 border text-white border-white bg-transparent">Learn more &gt;</button> 
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;