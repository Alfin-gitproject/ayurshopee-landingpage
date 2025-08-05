import React from "react";
import Link from "next/link";
import { nextArt } from "@/lib/font";
import BannerSlider from "@/components/slider/BannerSlider";

export default function Banner() {
  return (
    <section className="banner-section p_relative">
       {/* <div
        className="pattern-layer wow slideInDown animated"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
        style={{ backgroundImage: "url(/assets/images/banner/banner-2.jpg)" }}
      ></div>  */}
      <div className="shape">
        {/* <div
          className="shape-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        ></div> */}
        {/* <div
          className="shape-2 float-bob-x"
          style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
        ></div> */}
        {/* <div
          className="shape-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
        ></div> */}
        {/* <div
          className="shape-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}
        ></div> */}
      </div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <span className="upper-text">
                Unleash the Lasting Freshness of Nature
              </span>
              <h2
                style={{ fontFamily: `${nextArt.style.fontFamily} !important` }}
              >
                MY FACE <span>NATURAL FACE</span> BATHING BAR
              </h2>
              <img src="/assets/images/gallery/slo.png" width="200px" alt="Banner Image" />

              <h4 className="mb-0">Self Facial Bar</h4>
              <div className="price-display mb-3">
                <span className="price-tag" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>
                  ₹555
                </span>
              </div>
              <p className="mb-0">
                The My Face 1 Min Self Facial Bar is a comprehensive botanical
                formulation designed for skincare.
              </p>
              <p className="mb-5">
                It is composed of bioactive compounds derived from various
                herbs, flowers, Mitti, fruits and vegetables, leveraging their
                natural antioxidant, hydrating, and skin-rejuvenating
                properties. A rejuvenating Ayurvedic blend crafted to enhance
                your skin's vitality. This My Face Bar delicately exfoliates
                while promoting accelerated cell regeneration.
              </p>
               <div className="btn-box">
                <Link href="/checkout" className="theme-btn btn-two" style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: 'white !important' }}>
                  <span style={{ color: 'white !important' }}>Order now</span>
                </Link>
              </div> 
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column ">
            <div className="image-box ">
              <div className="image float-bob-y">
                <BannerSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}