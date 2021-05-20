import React from "react"
import bgImg from "../assets/img/about-bg.png"

const About = () => {
  return (
    <>
      <div className="walpapper">
        <div className="about-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-wrap">
                  <div className="about-title">
                    <h3>ABOUT</h3>
                  </div>
                  <div className="about-inner">
                    <div className="about-over">
                      <div
                        className="about-image"
                        id="parallax1"
                        style={{ backgroundImage: `url(${bgImg})` }}
                      ></div>
                    </div>
                    <div className="about-fx">
                      <div className="about-hdn">
                        <h3>
                          WE <br /> ARE
                        </h3>
                      </div>
                      <div className="about-content-box">
                        <p>
                          We believe in making real estate easy for Filipinos,
                          whenever, wherever. Life doesn’t have to be
                          complicated whether you’re renting or buying a
                          property. That’s why we develop the best digital
                          solutions for all your real estate needs. Our mission
                          is simple.
                        </p>
                        <p>
                          We organize and give you access to all the types of
                          properties available. By continuously challenging and
                          innovating, we can give you brand new technologies
                          that will help you find the property that fits your
                          needs.
                        </p>
                        <p>
                          Here in AHG, we help you in the now, while leading the
                          future of the real estate industry in the Philippines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
