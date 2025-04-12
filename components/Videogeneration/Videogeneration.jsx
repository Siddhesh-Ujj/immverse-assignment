// components/VideoGeneration.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './VideoGeneration.module.css'; // Create this CSS module
import { FaDiamond } from "react-icons/fa6";

import { MdCandlestickChart, MdExitToApp } from "react-icons/md";
import { PiCardsThree, PiDiamondsFourFill, PiMagicWandBold, PiWaveformFill } from "react-icons/pi";

import { AiOutlineNodeIndex } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";

import { RiTextSnippet } from "react-icons/ri";

const VideoGeneration = () => {
    return (
        <div className={`container`}>
            <div className={`row justify-content-center ${styles.row}`}>
                {/* Left Sidebar */}
                <div className={`col-md-4  ${styles.leftSidebar}`}>
                    <div className='row'>

                        <div className={`col-auto p-0 m-1 ${styles.logoIcon}`}>  <img src="/logo.png" alt="Video Preview 2" className="img-fluid" /></div>
                        <h2 className={`col-auto ${styles.sidebarTitle}`}>
                            Turn your Text into Video</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoType" className="form-label text-white">Select video type</label>
                        <select className="form-select bg-white bg-opacity-10 text-white" id="videoType" >
                            <option>I want Explainer Videos</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prompt" className="form-label text-white">Write your #Prompt in your language</label>
                        <textarea
                            className="form-control bg-white bg-opacity-10 text-white"
                            id="prompt"
                            rows="5"
                            placeholder="Imagine a playful elephant calf skating on snow..."
                        ></textarea>
                    </div>
                    <button className={`button w-100 text-white bg-white bg-opacity-10`}>
                        <PiMagicWandBold /> Generate
                    </button>
                </div>

                {/* Central Content Area */}
                <div className={`col-md-6 mx-0 ${styles.centralContent}`}>
                    <div className={`row   mx-1 ${styles.videoPreviewRow}`}>
                        <div className='col-6'>
                            <div className={styles.videoPreviewmain}>
                                {/* Placeholder for video preview 1 */}
                                <img src="/elemain.jpg" alt="Video Preview 1" className="img-fluid" style={{ backgroundColor: '#333',  objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className={`row ${styles.videoPreviewRow}`}>

                                <div className="col-md-12 mb-3">
                                    <div className={styles.videoPreview}>
                                        {/* Placeholder for video preview 2 */}
                                        <img src="/ele1.jpg" alt="Video Preview 2" className="img-fluid" style={{ backgroundColor: '#333',  objectFit: 'cover'}} />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className={styles.videoPreview}>
                                        {/* Placeholder for video preview 3 */}
                                        <img src="/ele2.jpg" alt="Video Preview 3" className="img-fluid" style={{ backgroundColor: '#333',  objectFit: 'cover' }} />
                                    </div>
                                </div>
                                {/* Add more video previews as needed */}
                            </div>
                        </div>
                    </div>

                    <div className={`mt-2 mx-1 p-0 ${styles.waveform}`}>
                        {/* Placeholder for waveform visualization */}
                        {/* <div style={{ backgroundColor: '#5e2e87', height: '60px', width: '100%' }}> */}
                        <img src='/wave.png' height={'100px'} width={"100%"} />
                        {/* </div> */}
                    </div>
                </div>
                <div className={`col-md-1 mx-0  ${styles.rightContent}`}>
                    <div className='row mx-0  justify-content-center rounded-5 bg-white bg-opacity-10    py-1'>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3 '>
                            <PiDiamondsFourFill size={25} color='white' />

                        </div>

                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <MdCandlestickChart size={25} color='white'/>

                        </div>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <PiCardsThree size={25} color='white' />

                        </div>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <MdExitToApp size={25} color='white' />

                        </div>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <FaDiamond size={25} color='white' />

                        </div>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <AiOutlineNodeIndex size={25} color='white' />

                        </div>
                        <div className='col-auto my-1 rounded-5 bg-white bg-opacity-10 p-3'>
                            <PiMagicWandBold size={25} color='white' />

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <div className={`row  justify-content-center mx-5 px-5 ${styles.bottomBar}`}>
                        <div className="col">
                            <button className={`btn btn-link ${styles.bottomBarButton}`}>
                                <span className={styles.bottomBarIcon}><PiWaveformFill /></span> AI Voice
                            </button>
                        </div>
                        <div className="col">
                            <button className={`btn btn-link ${styles.bottomBarButton}`}>
                                <span className={styles.bottomBarIcon}><BsPlayBtn /></span> AI Backgrounds
                            </button>
                        </div>
                        <div className="col">
                            <button className={`btn btn-link ${styles.bottomBarButton}`}>
                                <span className={styles.bottomBarIcon}><RiTextSnippet /></span> AI Script Generator
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGeneration;