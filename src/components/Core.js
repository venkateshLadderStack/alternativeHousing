import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Core = () => {
  return (
    <>
      <div className="core-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="core-wrap">
                <div className="proparty-inr">
                  <div className="cour-title">
                    <h5>OUR</h5>
                    <h3>CORE</h3>
                  </div>
                  <div className="proparty-wrap">
                    <div className="propaty-fx">
                      <div className="propaty-box">
                        <div className="propaty-icon">
                          <a href="#">
                            <StaticImage
                              src="../assets/img/i1.png"
                              alt=""
                              placeholder="blurred"
                              layout="constrained"
                            />
                          </a>
                        </div>
                        <div
                          className="propraty-span"
                          data-aos-delay="900"
                          data-aos-duration="2000"
                          data-aos="zoom-in"
                        >
                          <span>01</span>
                        </div>
                      </div>
                      <div className="proparty-content">
                        <h5>
                          PROPERTY <br />
                          TECHNOLOGY
                        </h5>
                        <p>
                          Empowering consumers with information and tools that
                          will help them make smart decisions in real estate.
                        </p>
                      </div>
                    </div>
                    <div className="propaty-fx dfl-fx">
                      <div className="proparty-content">
                        <h5>
                          ACCOMMODATION <br />
                          SOLUTIONS
                        </h5>
                        <p>
                          Lease with no hassle! Whether you’re a lessee, owner,
                          or newbie, we offer solutions to guide you in making
                          the best decisions for providing accommodations to
                          everyone.
                        </p>
                      </div>
                      <div className="propaty-box">
                        <div className="propaty-icon">
                          <a href="#">
                            <StaticImage
                              src="../assets/img/i1.png"
                              alt=""
                              placeholder="blurred"
                              layout="constrained"
                            />
                          </a>
                        </div>
                        <div
                          className="propraty-span spn-2"
                          data-aos-delay="1000"
                          data-aos-duration="2000"
                          data-aos="zoom-in"
                        >
                          <span>02</span>
                        </div>
                      </div>
                    </div>
                    <div className="propaty-fx dfl-fx dfl-3">
                      <div className="propaty-box">
                        <div className="propaty-icon">
                          <a href="#">
                            <StaticImage
                              src="../assets/img/i1.png"
                              alt=""
                              placeholder="blurred"
                              layout="constrained"
                            />
                          </a>
                        </div>
                        <div
                          className="propraty-span"
                          data-aos-delay="1100"
                          data-aos-duration="2000"
                          data-aos="zoom-in"
                        >
                          <span>03</span>
                        </div>
                      </div>
                      <div className="proparty-content">
                        <h5>
                          REAL ESTATE <br />
                          INNOVATION
                        </h5>
                        <p>
                          Lease with no hassle! Whether you’re a lessee, owner,
                          or newbie, we offer solutions to guide you in making
                          the best decisions for providing accommodations to
                          everyone.
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

export default Core
