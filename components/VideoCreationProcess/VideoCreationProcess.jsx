// components/VideoCreationProcess.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './VideoCreationProcess.module.css'; // Create this CSS module

const VideoCreationProcess = () => {
    return (
        <div className={`container-fluid ${styles.mainContainer}`}>
            <div className="row justify-content-center">
                {/* Write & Outline Card */}
                <div className={`col-md-3 ${styles.processCard}`}>
                    <div className='h-75'>
                        <div className="mb-3">
                            <label htmlFor="storyTopic" className="form-label">Enter Your Story Topic</label>
                            <input type="text" className="form-control" id="storyTopic" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Select Story Tone</label>
                            <div>
                                <button className={`btn btn-sm rounded-pill me-2 ${styles.toneButton}`}>Funky ✖</button>
                                <button className={`btn btn-sm rounded-pill me-2 ${styles.toneButton}`}>Scary ✖</button>
                                <button className={`btn btn-sm rounded-pill me-2 ${styles.toneButton}`}>Lullaby ✖</button>
                                {/* Add more tone options */}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="maxWords" className="form-label">Max Words</label>
                            <input type="number" className="form-control" id="maxWords" />
                        </div>
                    </div>
                    <h5 className={styles.cardTitle}>1. Write &amp; Outline</h5>
                    <p className={styles.cardDescription}>
                        Kick off by crafting a script with a prompt or by choosing from available template suggestions.
                    </p>
                </div>

                {/* Customize & Style Card */}
                <div className={`col-md-3 ${styles.processCard}`}>
                    <div className='h-75'>
                        <div className="mb-3">
                            <label htmlFor="videoOrientation" className="form-label">Video Orientation</label>
                            <select className="form-select" id="videoOrientation">
                                <option>Select Video Orientation</option>
                                {/* Add orientation options */}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Select Background</label>
                            <div className={styles.backgroundThumbnails}>
                                <div className={styles.thumbnail}>
                                    <img src="/bgimage.jpg" alt="Background 1" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.thumbnail}>
                                    <img src="/bgimage.jpg" alt="Background 2" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.thumbnail}>
                                    <img src="/bgimage.jpg" alt="Background 3" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.thumbnail}>
                                    <img src="/bgimage.jpg" alt="Background 4" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                                {/* Add more background thumbnails */}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="backgroundSound" className="form-label">Select Background Sound</label>
                            <select className="form-select" id="backgroundSound">
                                <option>Select Background Sound</option>
                                {/* Add sound options */}
                            </select>
                        </div>
                    </div>
                    <h5 className={styles.cardTitle}>2. Customize &amp; Style</h5>
                    <p className={styles.cardDescription}>
                        Select orientation and pick a background scene and music from free templates.
                    </p>
                </div>

                {/* Finish & Export Card */}
                <div className={`col-md-3 ${styles.processCard}`}>
                    <div className='h-50 m-5'>
                        <div className={styles.exportIndicator}>
                            {/* Placeholder for the export indicator */}
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#5e2e87' }}>
                                    {/* You might use an icon or animation here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-3">
                    <h5 className={`${styles.cardTitle}`}>3. Finish &amp; Export</h5>
                    <p className={styles.cardDescription}>
                        Select the export format and download the generated video, script, or narration.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoCreationProcess;