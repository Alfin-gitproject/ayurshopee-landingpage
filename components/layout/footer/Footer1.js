import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer" id="footer">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
          <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
          <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
          <div className="pattern-4"></div>
        </div>
        <div className="widget-section pt_120 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="assets/images/ayurshopeelogo.png" alt="" />
                    </Link>
                  </figure>
                  <ul className="social-links clearfix">
                    <li>
                      <a href="https://www.facebook.com/ayurshoppeeindia/">
                        <i className="icon-7"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ayurshoppeeindia/">
                        <i className="icon-4"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <img src="assets/images/icons/icon-1.png" alt="" />
                        Ayurshoppee Enterprises,
                        <br />
                        Door No:5/266B,
                        <br />
                        Mangalassery Tower, Kalamassery
                        Pincode-683104 Cochin, Kerala,India
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <i className="icon-26"></i>
                        <Link href="mailto:info@ayurshoppee.com">info@ayurshoppee.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <i className="icon-2"></i>
                        <Link href="tel:+917510411202">+91 7510411202</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="footer-nav-container">
                <ul className="footer-nav">
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/shipping-policy">Shipping Policy</Link></li>
                  <li><Link href="/return-policy">Return Policy</Link></li>
                </ul>
              </div>
              <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Ayurshoppee. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        /* Footer Navigation Styles */
        .footer-nav-container {
          width: 100%;
         
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .footer-nav li {
          margin: 0;
        }

        .footer-nav a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        .footer-nav a:hover {
          color: #1a6d31;
        }

        .copyright {
          text-align: center;
          color: #fff;
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .footer-nav-container {
            margin-bottom: 15px;
          }

          .footer-nav {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .footer-nav a {
            display: block;
            padding: 8px 0;
            width: 100%;
            text-align: center;
          }

          .copyright {
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}