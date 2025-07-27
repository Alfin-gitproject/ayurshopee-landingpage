import Directions from '@/components/elements/Directions';
import Link from 'next/link';
import React from 'react';

export default function chooseus() {


  return (
    <section className="chooseus-section">
      {/* <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/chooseus-bg.webp)',backgroundSize:'contain'}}></div> */}
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-7 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">Why Choose us ?</span>
                <h2>You can be  <br />beautiful</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                        <div className="icon-box">
                        <img className='icon-img' src='assets/images/icons/healthy_11565493.png'/>
                      </div>  
                      <h3>Gentle on All Skin Types</h3>
                      <p>Our natural face bathing bar is crafted to be kind to every skin type, including sensitive and oily skin.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                     <div className="icon-box">
                        <img  className='icon-img' src='assets/images/icons/healthy_11565488.png'/>
                      </div> 
                      <h3>Eco-Friendly and Sustainable</h3>
                      <p>Made with organic ingredients, it’s a step towards a greener lifestyle without compromising on quality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                     <div className="icon-box">
                        <img  className='icon-img' src='assets/images/icons/healthy_11565454.png'/>
                      </div> 
                      <h3>Nourishing Natural Ingredients</h3>
                      <p>Packed with botanical extracts like coconut oil and essential oils, our bar nourishes your skin while cleansing</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                       <div className="icon-box">
                        <img  className='icon-img' src='assets/images/icons/investment_6897300.png'/>
                      </div> 
                      <h3>Long-Lasting and Cost-Effective</h3>
                      <p>Our handcrafted bathing bar lathers richly and lasts longer than liquid washes, giving you more value for your money</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{position:"relative"}} className="col-lg-5 col-md-12 col-sm-12 content-column d-flex align-items-center justify-content-center">
            <Directions/>
          </div>
        </div>
      </div>
    </section>
  );
};
