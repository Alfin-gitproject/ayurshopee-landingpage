'use client'
import React, { useState } from 'react';
import Link from "next/link";
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    <section className="video-section p_relative">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/Bimage-2.jpeg)' }}></div>
      {/* <figure className="image-layer"><img src="assets/images/resource/video-1.webp" alt="" /></figure>  */}
      <div className="auto-container">
        <div className="inner-box">
          <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
         <div className="video-btn">
  <a 
    onClick={() => setOpen(true)}
    className="bg-green-500 hover:bg-green-600 transition-colors duration-300"
  >
    <i className="fas fa-play " style={{ color: '#0a2200' }}></i>
    <span className="border-animation border-1"></span>
    <span className="border-animation border-2"></span>
    <span className="border-animation border-3"></span>
  </a>
</div>
          <h2 style={{ color: 'black' }}>  
  Discover Your Natural Glow<br />  
  with Our Bathing Bar  
</h2>
          <div className="btn-box">
            <Link href="/" className="theme-btn btn-one"><span>Order now</span></Link>
          </div>
        </div>
      </div>
    </section>
     <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="c2nyy2D2xlo" onClose={() => setOpen(false)} />
     </>
  );
};

