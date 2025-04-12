import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const WorkSection = () => {
  return (
    <div className=" text-white py-5" style={{ background: "#1e1e2e" }}>
      <div className="container text-center">
        <p className=" mb-1 text-center "><label className='border rounded-5 p-2 border-white bg-white bg-opacity-25'>- How it works -</label></p>
        <h1 className="display-4 fw-bold">Turn ideas into  <br /> Short videos in seconds</h1>
        <p className="lead mt-3">Produce endless short videos instantly, Automatically generate <br /> captions, effects, backgrounds, and music.</p>
       
       
      </div>
    </div>
  );
};

export default WorkSection;