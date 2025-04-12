// components/PlatformSupport.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './PlatformSupport.module.css'; // Create this CSS module
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaThreads } from 'react-icons/fa'; // Import icons
import { FaXTwitter } from "react-icons/fa6";
import { BsThreads } from "react-icons/bs";


const PlatformSupport = () => {
  const platforms = [
    {
     icon: <FaInstagram size={32} />,
      name: 'Instagram Reels',
      description: 'Transform Instagram Reels into engaging content by adding gameplay to captivate viewers.',
    },
    {
      icon: <FaTiktok size={32} />,
      name: 'TikTok Videos',
      description: 'Elevate your TikTok Videos by adding gameplay to create captivating and entertaining content.',
    },
    {
      icon: <FaYoutube size={32} />,
      name: 'YouTube Shorts',
      description: 'Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content.',
    },
    {
      icon: <FaFacebook size={32} />,
      name: 'Facebook Reels',
      description: 'Transform Facebook Reels into engaging content by adding gameplay to captivate your viewers.',
    },
    {
      icon: <FaXTwitter size={32} />,
      name: 'Twitter (X) Videos',
      description: 'Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked.',
    },
    {
      icon: <BsThreads size={32} />,
      name: 'Thread Videos',
      description: 'Boost your Thread videos with engaging gameplay to captivate viewers and enhance your content.',
    },
  ];

  return (
    <div className={` text-white py-5 `}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {platforms.map((platform, index) => (
            <div key={index} className="col">
              <div className={`card bg-secondary ${styles.platformCard}`}>
                <div className="card-body d-flex flex-column align-items-start">
                  <div className={styles.icon}>{platform.icon}</div>
                  <h5 className={`card-title mt-3 ${styles.platformName}`}>{platform.name}</h5>
                  <p className={`card-text mt-2 ${styles.platformDescription}`}>{platform.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSupport;