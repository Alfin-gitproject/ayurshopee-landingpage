import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
export default function feature() {
  return (
    <section className="feature-section pt_120 pb_90">
      <div className="auto-container">
        <div className="row clearfix align-items-stretch gap-mobile">
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one h-100">
              <div className="inner-box d-flex flex-column justify-content-between h-100">
                <div className="icon-box d-flex justify-content-center">
                  <FontAwesomeIcon width={40} icon={faCheckToSlot} />
                </div>
                <h3>Effective Whitening Ingredients</h3>
                <p>
                  Formulated with Kojic Acid and Glutathione, this soap works to
                  lighten hyperpigmentation and dark spots, promoting a more
                  even skin tone. Kojic acid is known for its ability to inhibit
                  melanin production, while glutathione helps reduce oxidative
                  stress in the skin.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one h-100">
              <div className="inner-box d-flex flex-column justify-content-between h-100">
                <div className="icon-box d-flex justify-content-center">
                  <FontAwesomeIcon width={40} icon={faCheckToSlot} />
                </div>
                <h3>Tanning and Dark Spot Removal</h3>
                <p>
                  Designed specifically for body tan removal and dark spot
                  treatment, this soap helps users achieve a brighter complexion
                  and reduces the appearance of discoloration caused by sun
                  exposure or acne scars.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one h-100">
              <div className="inner-box d-flex flex-column justify-content-between h-100">
                <div className="icon-box d-flex justify-content-center">
                  <FontAwesomeIcon width={40} icon={faCheckToSlot} />
                </div>
                <h3>Gentle on the Skin</h3>
                <p>
                  Suitable for both men and women, this soap is gentle enough
                  for daily use. It cleanses without stripping the skin of its
                  natural moisture, making it ideal for various skin types.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one h-100">
              <div className="inner-box d-flex flex-column justify-content-between h-100">
                <div className="icon-box d-flex justify-content-center">
                  <FontAwesomeIcon width={40} icon={faCheckToSlot} />
                </div>
                <h3>Promotes Glowing Skin</h3>
                <p>
                  Regular use can lead to noticeably brighter and more radiant
                  skin. Users often report a more luminous complexion and
                  improved skin texture over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}