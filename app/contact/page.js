
import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

const ContactUs = () => {
  const styles = {
    contactForm: {
      transition: 'border-color 0.3s ease',
    },
    formInput: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      transition: 'border-color 0.3s ease',
    },
    submitButton: {
      backgroundColor: '#dc3545',
      border: 'none',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    decorativeLine: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-submit-btn:hover {
            background-color: #c82333 !important;
            transform: translateY(-1px);
          }
          
          .contact-form-input:focus {
            outline: none;
            border-color: #007bff !important;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
          }
          
          @media (max-width: 768px) {
            .contact-info-mobile {
              padding: 20px !important;
            }
            
            .map-section-mobile {
              height: 300px !important;
              margin-top: 30px;
            }
            
            .contact-form-mobile {
              padding: 30px 20px !important;
            }
          }
        `
      }} />
      
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        <div className="min-h-screen bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="row clearfix">
              {/* Contact Information Section */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-info-content contact-info-mobile" style={{ padding: '40px' }}>
                  {/* Contact Number */}
                  <div className="info-block mb-5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Contact number</h2>
                    <p className="text-lg text-gray-600">
                      <Link href="tel:+917510411202" className="text-gray-600 hover:text-blue-600">
                        +917510411202
                      </Link>
                    </p>
                  </div>

                  {/* Our Location */}
                  <div className="info-block mb-5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Our Location</h2>
                    <p className="text-gray-600 leading-relaxed">
                      AYURSHOPPEE ENTERPRISES, BUILDING NO 5/266B,<br />
                      MANGALASSERY TOWER, Kalamassery P.O., Cochin-683104, Kerala<br />
                      GST: 32AAFCL9060K1ZC
                    </p>
                  </div>

                  {/* Official Email */}
                  <div className="info-block mb-5">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Official Email</h2>
                    <p className="text-lg text-gray-600">
                      <Link href="mailto:info@ayurshoppee.com" className="text-gray-600 hover:text-blue-600">
                        info@ayurshoppee.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="map-section map-section-mobile" style={{ height: '400px', position: 'relative' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7095.478294878696!2d76.3182365902283!3d10.064181028421768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f43628d2381%3A0x60a230196da2d2e9!2sMangalassery%20tower!5e1!3m2!1sen!2sin!4v1754558603214!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '8px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ayurshoppee Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section mt-12">
              <div className="text-center mb-8">
                <div className="decorative-line mb-4" style={styles.decorativeLine}>
                  <span style={{ color: '#1a6d31', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px' }}>
                    ←――――――――― KEEP IN TOUCH ―――――――――→
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <form className="contact-form contact-form-mobile bg-gray-50 p-8 rounded-lg" style={styles.contactForm}>
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 form-group mb-4">
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Name" 
                          required 
                          className="contact-form-input form-control p-3 border border-gray-300 rounded"
                          style={styles.formInput}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 form-group mb-4">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Email*" 
                          required 
                          className="contact-form-input form-control p-3 border border-gray-300 rounded"
                          style={styles.formInput}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 form-group mb-4">
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Phone" 
                          className="contact-form-input form-control p-3 border border-gray-300 rounded"
                          style={styles.formInput}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 form-group mb-4">
                        <textarea 
                          name="message" 
                          placeholder="Your Message *" 
                          rows="6"
                          required
                          className="contact-form-input form-control p-3 border border-gray-300 rounded"
                          style={{...styles.formInput, resize: 'vertical'}}
                        ></textarea>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button 
                          type="submit" 
                          className="contact-submit-btn btn px-6 py-3 text-white font-semibold rounded"
                          style={styles.submitButton}
                        >
                          <i className="fas fa-paper-plane mr-2"></i>Get In Touch
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;
