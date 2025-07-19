import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function service() {
  return (
    <section className="service-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          {/* <span className="sub-title">Our Services</span> */}
          <h2>
           
Radiate Your Glow,


            <br /> Nourish Your Skin Naturally
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    {/* <div>
                      <img src="assets/images/service/service-3.webp" alt="" />
                    </div> */}
                  </figure>
                  {/* <div className="icon-box d-flex align-items-center justify-content-center"><FontAwesomeIcon color='#df2232' icon={faCheck} width={50} /></div> */}
                </div>
                <div className="lower-content">
                  <h3>
                    <div>Directions for use</div>
                  </h3>
                  <ul className="list-style-one clearfix">
                    <li>
                      Moisten the bar and rub it to create a rich lather, then
                      apply it to the face
                    </li>
                    <li>
                      Evenly spread the abundant foam onto the face and gently
                      massage for one minute.
                    </li>
                    <li>
                      Rinse the face thoroughly with clean water. Then gently
                      pat the skin until dry,leaving it more hydrated and
                      rejuvenated.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    {/* <div>
                      <img src="assets/images/service/service-2.webp" alt="" />
                    </div> */}
                  </figure>
                  {/* <div className="icon-box d-flex align-items-center justify-content-center"><FontAwesomeIcon color='#df2232' icon={faCheck} width={50} /></div> */}
                </div>
                <div className="lower-content">
                  <h3>
                    <div>Safety</div>
                  </h3>
                  <ul className="list-style-one clearfix">
                    <li>Long-lasting herbal formula for extended use</li>
                    <li>
                      Sustained freshness and hydration throughout the day
                    </li>
                    <li>Consistent cleansing performance with every bath</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div
              className="service-block-one wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    {/* <div>
                      <img src="assets/images/service/service-1.webp" alt="" />
                    </div> */}
                  </figure>
                  {/* <div className="icon-box d-flex align-items-center justify-content-center"><FontAwesomeIcon color='#df2232' icon={faCheck} width={50} /></div> */}
                </div>
                <div className="lower-content">
                  <h3>
                    <div>Instant results </div>
                  </h3>
                  <ul className="list-style-one clearfix">
                    <li>
                      Is it a quick fix or a lasting solution? With one-min
                      facial bar, its both
                    </li>
                    <li>
                      Our facial bar delivers visible results with one minute-
                      fast
                    </li>
                    <li>
                      But the secret to glowing, healthy skin? Consistency
                    </li>
                    <li>
                      Just like healthy eating or working out, regular use
                      brings lasting beauty.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
