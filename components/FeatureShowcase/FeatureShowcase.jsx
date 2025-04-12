
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeatureShowcase.module.css';

const FeatureShowcase = () => {
    return (
        <div className={` text-white py-5 ${styles.mainContainer}`}>
            <div className="container">
                <div className="row justify-content-center">

                    <div className={`col-md-3 mx-1  mb-4 ${styles.featureCard}`}>
                        <div className='h-75'>
                            <div className={styles.switch}>
                                <img src="/voicesection.png" alt="Video Preview 1" className={"rounded-4"} style={{ backgroundColor: '#333', height: '18vw', width: "20vw" }} />

                            </div> </div>

                        <h6 className={styles.cardTitle}>Video Background</h6>
                        <p className={styles.cardDescription}>
                            Instantly automate videos. Generate captions, effects, music, & backgrounds in a second.
                            im      </p>
                    </div>


                    <div className={`col-md-4 mx-1 mb-4 text-center ${styles.featureCard}`}>
                        <div className={`text-center `}>
                            <div className={styles.switch}>
                                <img src="/poweredsection.png" alt="Video Preview 1" className={"rounded-4 mt-5"} style={{ backgroundColor: '#333', height: 'auto', width: "25vw" }} />
                            </div>
                        </div>
                        <h2 className={`fw-bold ${styles.centralHeading}`}>Your AI-powered <br />video creator</h2>

                    </div>


                    <div className={`col-md-3 mx-1 mb-4 text-center ${styles.centralCard}`}>
                        <div className='h-75 mb-3'>
                        <div className={styles.switch}>
                                <img src="/bgimages.png" alt="Video Preview 1" className={"rounded-4 mt-5"} style={{ backgroundColor: '#333', height: 'auto', width: "20vw" }} />
                            </div>

                            {/* <div className={styles.thumbnailPreview}>

                                <div className={styles.thumbnail}> <img src="/bgnew.jpg" alt="Background 1" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.thumbnail}> <img src="/bgnew.jpg" alt="Background 1" className="img-fluid rounded" style={{ height: '80px', objectFit: 'cover' }} />
                                </div>
                                <div className={styles.thumbnail}> <img src="/bgnew.jpg" alt="Background 1" className="img-fluid rounded" style={{ height: '60px', objectFit: 'cover' }} />
                                </div>
                            </div> */}
                        </div>
                        <h6 className={styles.cardTitle}>Video Background</h6>
                        <p className={styles.cardDescription}>
                            Choose an AI-generated background or a video template from our library.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">

                    <div className={`col-md-3 mx-1 mb-4 ${styles.featureCard}`}>
                        <div className='h-75'>
                            <div className={styles.switch}>
                                <img src="/musicsection.png" alt="Video Preview 1" className={"rounded-4"} style={{ backgroundColor: '#333', height: '18vw', width: "20vw" }} />

                            </div>

                        </div>
                        <h6 className={styles.cardTitle}>AI Voice Narrator</h6>
                        {/* <div className={styles.switch}>
                            <span className={styles.switchLabel}>Memorable Deep Ocean</span> */}

                        {/* <div className={styles.switchTrack}>
                                <div className={styles.switchThumb}></div>
                            </div> */}

                        <p className={styles.cardDescription}>
                            Quickly generate realistic AI voice narration, converting text into natural-sounding narration.
                        </p>
                    </div>


                    <div className={`col-md-3  mx-1 mb-4 ${styles.featureCard}`}>

                        <div className='h-75'>
                            <div className={styles.switch}>
                                <img src="/videosection.png" alt="Video Preview 1" className={"rounded-4"} style={{ backgroundColor: '#333', height: '18vw', width: "20vw" }} />

                            </div>

                        </div>
                        <h6 className={styles.cardTitle}>Cross Platform Videos</h6>
                        <p className={styles.cardDescription}>
                            Create videos tailored for various platforms, including YouTube, Instagram, and TikTok.
                        </p>
                    </div>


                    <div className={`col-md-3  mx-1 mb-4 ${styles.featureCard}`}>
                        <div className='h-75 '>
                            <div className={styles.switch}>
                                <img src="/langsection.png" alt="Video Preview 1" className={"rounded-4"} style={{ backgroundColor: '#333', height: '18vw', width: "20vw" }} />

                            </div>

                        </div>
                        <h6 className={styles.cardTitle}>Auto Subtitle Generation</h6>
                        {/* <div className={styles.switch}>
                            <span className={styles.switchLabel}>Automatic AI Captions</span>
                            
                            <div className={styles.switchTrack}>
                                <div className={styles.switchThumb}></div>
                            </div>
                        </div> */}
                        <p className={styles.cardDescription}>
                            Automatically generate clear subtitles in any language, from Chinese to Russian and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureShowcase;