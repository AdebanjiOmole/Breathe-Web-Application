import React from "react";

const home = () => {
  return (
    <div>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo-wrapper">
            <a className="logo" href="index.html">
              <img src="/assets/image/logo.png" alt="" />
            </a>
          </div>
          <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="left-side">
            <div className="nav-link-wrapper active-nav-link">
              <a href="index.html">Home</a>
            </div>

            <div className="nav-link-wrapper">
              <a href="about.html">About</a>
            </div>

            <div className="nav-link-wrapper">
              <a href="impact.html">Impact</a>
            </div>

            <div className="nav-link-wrapper">
              <a href="work.html">How it works</a>
            </div>

            <div className="nav-link-wrapper">
              <a href="contact.html">Contact</a>
            </div>
          </div>

          <div>
            <a id="buttonsignin" href="signin.html">
              SIGN IN
            </a>
          </div>
        </div>

        <div id="container">
          <div className="item">
            <h2 className="hero-h">
              Pure Medical-grade Oxygen across Healthcare Centres in Africa
            </h2>

            <div className="hero-p">
              We provide unlimited availability and unrestrited <br />{" "}
              accessibility to oxygen in cylinders across African <br /> cities
              and remote areas
            </div>
            <button id="app">
              Get APP
              <p id="applogos">
                <i className="fab fa-apple"></i>
                <i className="fab fa-android"></i>
                <i className="fab fa-windows"></i>
              </p>
            </button>
          </div>
          <div className="herowrap">
            <img src="assets/image/HeroImageP.png" alt="" height="700px" />
          </div>
        </div>

        <div className="aboutUs-wrapper">
          <section>
            <div className="aboutmargin">
              <div className="about-us">About Us</div>
              <div id="about">
                <div id="sideline"></div>
                <p>
                  Breathe Africa is a solution that helps to save lives by
                  providing quick access to on-demand oxygen in cylinders.
                </p>
              </div>
              <div>
                <a id="linkbutton" href="about.html">
                  READ MORE
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="enhance">
          <p>Enhancing the Experience of Healthcare Support in </p>
          <div id="flip">
            <div>
              <div>Nigeria</div>
            </div>
            <div>
              <div>Africa</div>
            </div>
            <div>
              <div>the World</div>
            </div>
          </div>
        </div>

        <div id="statz">
          <div className="stat">
            <h2>1+</h2>
            <p>HUB</p>
          </div>
          <div className="line-arrow"></div>
          <div className="stat">
            <h2>20+</h2>
            <p>Logistic Partners</p>
          </div>
          <div className="stat">
            <h2>20+</h2>
            <p>Health Care Centers</p>
          </div>
          <div className="stat">
            <h2>3+</h2>
            <p>Africa cities</p>
          </div>
          <div className="stat">
            <h2>1+</h2>
            <p>Remote Areas</p>
          </div>
        </div>

        <div className="breathe-approach">
          <h2>The Breathe Approach</h2>
          <p>
            Breathe leverages the convenience of technology <br /> while
            improving effective oxygen delivery within Africa.
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-item">
            <img
              src="assets/image/global-content.jpg"
              width="400"
              height="400"
            />
            <img src="assets/image/slider 1.jpg" width="400" height="400" />
            <img src="assets/image/slider 2.jpg" width="400" height="400" />
            <img src="assets/image/Stay image.PNG" width="400" height="400" />
            <img
              src="assets/image/global-content2.jpg"
              width="400"
              height="400"
            />
            <img src="assets/image/slider 5.jpg" width="400" height="400" />
            <img src="assets/image/slider 6.jpg" width="400" height="400" />
            <img src="assets/image/slider 7.jpg" width="400" height="400" />
            <img src="assets/image/slider 8.jpg" width="400" height="400" />
            <img
              src="assets/image/global-content3.jpg"
              width="400"
              height="400"
            />
          </div>
        </div>

        <section className="text-center pt-5" id="testmonial">
          <div className="container2">
            <h3 className="mt-3 mb-5 pb-5">
              The Current State of Access to Oxygen
            </h3>
            <div className="row">
              <div id="box8">
                <div className="testmonial-wrapper">
                  <img src="assets/image/red color.PNG" alt="Client Image" />
                  <p>
                    In Nigeria, more than 625,000 deaths annually occur due to
                    diseases associated with hypoxaemia-insufficient oxygen in
                    the blood or low blood oxygen saturation. <br /> <br />{" "}
                    <br /> <br /> <br />
                    <strong>
                      Clinton Health Access Initiative (CHAI), 2013
                    </strong>
                  </p>
                </div>
              </div>
              <div id="box8">
                <div className="testmonial-wrapper">
                  <img src="assets/image/white pic.PNG" alt="Client Image" />
                  <p>
                    {" "}
                    <em>"</em> Diseases requiring oxygen for treatment are
                    accounting for a larger share of the burden of disease than
                    a decade ago. The challenges limiting oxygen access stem
                    from trends, including population growth and epidemiological
                    shifts, increased reliance on limited domestic resources
                    <em>"</em>
                  </p>
                </div>
              </div>
              <div id="box8">
                <div className="testmonial-wrapper">
                  <img src="assets/image/green pic.PNG" alt="Client Image" />
                  <p>
                    In sub-Saharan Africa, lack of access to oxygen can be
                    attributed to a host of prevailing conditions including the
                    absence of a fragmented supply and distribution systems for
                    oxygen and oxygen delivery systems worsen facility-level
                    barriers to oxygen access for patients. <br /> <br />
                    <strong>Federal Ministry of Health, Nigeria. 2017</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text">
          <p>
            In Nigeria, more than 625,000 deaths annually occur due to diseases
            associated with hypoxaemia-insufficient oxygen in the blood or low
            blood oxygen saturation. CHAI. 2013. In children, hypoxaemia is a
            major fatal complication of pneumonia, accounting for 120,000
            under-5 deaths in Nigeria per year UNICEF. 2015.
          </p>

          <p>
            In sub-Saharan Africa, lack of access to oxygen can be attributed to
            a host of prevailing conditions including the absence of a
            fragmented supply and distribution systems for oxygen and oxygen
            delivery systems worsen facility-level barriers to oxygen access for
            patients. Federal Ministry of Health, Nigeria. 2017
          </p>

          <p>
            Diseases requiring oxygen for treatment are accounting for a larger
            share of the burden of disease than a decade ago. The challenges
            limiting oxygen access stem from trends, including population growth
            and epidemiological shifts, increased reliance on limited domestic
            resources
          </p>
        </div>

        <div id="stay">
          <div id="box7">
            <img
              src="assets/image/man research.jpg"
              height="350px"
              width="550px"
              id="boyimg"
            />
          </div>
          <div id="right">
            <h1>Stay in the know</h1>
            <p>
              To keep up to date with our events, additional services and
              offerings across Africa.
            </p>
            <div id="contact-container">
              <form
                className=" contact-form"
                action="php/contact.php"
                method="POST"
              >
                <input
                  type="text"
                  className="contact-form-text"
                  name="name"
                  placeholder="NAME"
                />
                <p>
                  <input
                    type="email"
                    className="contact-form-text"
                    name="mail"
                    placeholder="E-MAIL"
                  />
                  <button
                    type="submit"
                    className="contact-form-btn"
                    name="submit"
                  >
                    SUBSCRIBE
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
    <div class="footer-wrapper">
        <footer class="footer">
            <div class="containerf">
                <div class="row">
                <div class="footer-col">
                    <a href="index.html" class="footer-brand"><img alt="Breathe"
                            src="assets/image/Breathe logo.png" /></a>
                    <ul class="social-links">
                        <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Legal</h4>
                    <ul class="footer-links">
                        <li><a href="https://Breathe.com/privacy-notice/">Privacy notice</a></li>
                        <li><a href="https://Breathe.com/anti-bribery-and-corruption-policy/">ABC policy</a></li>
                        <li><a href="https://Breathe.com/code-of-conduct/">Code of conduct</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Resources</h4>
                    <ul class="footer-links">
                        <li><a href="https://Breathe.com/faq/">FAQs</a></li>
                        <li><a href="https://Breathe.com/blog/">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">About us</h4>
                    <ul class="footer-links">
                        <li><a href="https://Breathe.com/about-us/">Who we are</a></li>
                        <li><a href="https://Breathe.com/platform/">Platform</a></li>
                        <li><a href="https://Breathe.com/careers/">Careers</a></li>
                    </ul>
                </div>
              </div>
            </div>
            <p class="copyright">© Copyright 2022 Breathe. All rights reserved.</p>
        </footer>
    </div>
};

export default home;
