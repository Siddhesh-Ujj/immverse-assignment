// components/FeatureShowcase.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeatureShowcase.module.css'; // Create this CSS module

const FeatureShowcase = () => {
    return (
        <div className={` text-white py-5 ${styles.mainContainer}`}>
            <div className="container">
                <div className="row justify-content-center">
                    {/* Top-Left Card */}
                    <div className={`col-md-3 mx-1  mb-4 ${styles.featureCard}`}>
                        <h6 className={styles.cardTitle}>Video Background</h6>
                        <div className={styles.switch}>
                            <span className={styles.switchLabel}>Magic Creator</span>
                            {/* Implement switch UI here */}
                            <div className={styles.switchTrack}>
                                <div className={styles.switchThumb}></div>
                            </div>
                        </div>
                        <p className={styles.cardDescription}>
                            Instantly automate videos. Generate captions, effects, music, & backgrounds in a second.
                        </p>
                    </div>

                    {/* Top-Right Card */}
                    <div className={`col-md-4 mx-1 mb-4 align-content-center ${styles.featureCard}`}>
                        <div className={styles.centralIcon}>
                            {/* Placeholder for the stylized icon */}
                            <div className={styles.innerIcon}></div>
                        </div>
                        <h2 className={`fw-bold ${styles.centralHeading}`}>Your AI-powered <br /> video creator</h2>

                    </div>

                    {/* Central Card */}
                    <div className={`col-md-3 mx-1 mb-4 text-center ${styles.centralCard}`}>


                        <h6 className={styles.cardTitle}>Video Background</h6>
                        <div className={styles.thumbnailPreview}>
                            {/* Placeholder for thumbnail previews */}
                            <div className={styles.thumbnail}></div>
                            <div className={styles.thumbnail}></div>
                            <div className={styles.thumbnail}></div>
                        </div>
                        <p className={styles.cardDescription}>
                            Choose an AI-generated background or a video template from our library.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* Bottom-Left Card */}
                    <div className={`col-md-3 mx-1 mb-4 ${styles.featureCard}`}>
                        <div className={styles.waveformPlaceholder}>
                            {/* Placeholder for waveform */}
                        </div>
                        <h6 className={styles.cardTitle}>AI Voice Narrator</h6>
                        <div className={styles.switch}>
                            <span className={styles.switchLabel}>Memorable Deep Ocean</span>
                            {/* Implement switch UI here */}
                            <div className={styles.switchTrack}>
                                <div className={styles.switchThumb}></div>
                            </div>
                        </div>
                        <p className={styles.cardDescription}>
                            Quickly generate realistic AI voice narration, converting text into natural-sounding narration.
                        </p>
                    </div>

                    {/* Bottom-Center Card */}
                    <div className={`col-md-3  mx-1 mb-4 ${styles.featureCard}`}>
                        <div className={styles.playButtonPlaceholder}>
                            {/* Placeholder for play button */}
                            <div className={styles.playIcon}>▶</div>
                        </div>
                        <h6 className={styles.cardTitle}>Cross Platform Videos</h6>
                        <p className={styles.cardDescription}>
                            Create videos tailored for various platforms, including YouTube, Instagram, and TikTok.
                        </p>
                    </div>

                    {/* Bottom-Right Card */}
                    <div className={`col-md-3  mx-1 mb-4 ${styles.featureCard}`}>
                        <div className={styles.textPreviewPlaceholder}>
                            {/* Placeholder for text preview */}
                            <p>There lived a certain man in Russia long ago...</p>
                            <p className={styles.languageText}>自动生成中文字幕</p>
                            <p className={styles.languageText}>自動生成日本語字幕</p>
                        </div>
                        <h6 className={styles.cardTitle}>Auto Subtitle Generation</h6>
                        <div className={styles.switch}>
                            <span className={styles.switchLabel}>Automatic AI Captions</span>
                            {/* Implement switch UI here */}
                            <div className={styles.switchTrack}>
                                <div className={styles.switchThumb}></div>
                            </div>
                        </div>
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