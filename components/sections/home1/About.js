import Link from "next/link";
import React from "react";

export default function about() {
  return (
    <section className="about-section pt_120 pb_120 bg-color-1">
      <div className="pattern-layer">
        {/* <div
          className="pattern-1 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
        ></div> */}
        {/* <div
          className="pattern-2 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
        ></div> */}
        <div
          className="pattern-3 rotate-me"
          style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
        ></div>
        <div
          className="pattern-4"
          style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}
        ></div>
        {/* <div
          className="pattern-5"
          style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}
        ></div> */}
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_one">
              <div className="image-box">
                {/* <div
                  className="shape float-bob-x"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-7.png)",
                  }}
                ></div> */}
                <figure className="image">
                  <img src="assets/images/background/img-2.jpeg" alt="" />
                </figure>
                {/* <div className="icon-one">
                  <i className="icon-13"></i>
                </div> */}
                {/* <div className="icon-two">
                  <i className="icon-14"></i>
                </div> */}
                {/* <div className="text-box">
                  <h3>Wade Warren</h3>
                  <span>Medical Assistant</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_30">
                <div className="sec-title mb_15">
                  <span className="sub-title">About the product</span>
                  <h2 className="main-heading">Why My Face?</h2>
                </div>
                <div className="text-box mb_40">
                  <h6>Crafted for safe, long-term use</h6>
                  <p>
                    My Face 1 Min Self Facial Bar is designed as a herbal
                    skincare solution, primarily formulated with botanical
                    extracts from fruits and vegetables. Crafted with 100%
                    natural botanical extracts and is free from harmful
                    chemicals. This revitalizing soap is dermatologically tested
                    to suit every skin type and safe for regular use.
                  </p>
                  <ul className="list-style-one clearfix">
                    <p><strong>Benefits :</strong></p>
                    <li>Bioactive Phytochemical Complex</li>
                    <li>Botanical Extract-Based</li>
                    <li>Skin Rejuvenation</li>
                    <li>Phytonutrient-Enriched Cleansing Bar</li>
                    <li>Gentle & Effective on skin</li>
                    <li>Removes dark circle</li>
                    <li>Quick Action Formula</li>
                    <li> Skin fairness Enhancer</li>
                    <li>Antioxidant Protection</li>
                    <li>Skin repairing</li>
                    <li>UV protection</li>
                    <li>Improve complexion</li>
                  </ul>
                </div>
                <div className="btn-box">
                  {/* <Link href="/checkout" className="theme-btn btn-one">
                    <span>Order now</span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
