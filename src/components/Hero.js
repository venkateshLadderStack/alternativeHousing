import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Hero = () => {
  return (
    <>
      <div className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-wrap">
                <div className="hero-content">
                  <h3>
                    ALTERNATIVE <br />
                    HOUSING GROUP
                  </h3>
                  <p>
                    We are a Filipino team developing progressive brand
                    solutions <br />
                    for better quality living in the Philippines.
                  </p>
                  <a href="#">LEARN MORE</a>
                </div>
                <div className="hero-inner">
                  <div className="hero-img">
                    <StaticImage
                      src="../assets/img/hero-img.webp"
                      layout="constrained"
                      placeholder="blurred"
                      alt=""
                    />
                    <StaticImage
                      src="../assets/img/hero-img2.webp"
                      layout="constrained"
                      placeholder="blurred"
                      alt=""
                    />
                    <StaticImage
                      src="../assets/img/hero-img3.webp"
                      layout="constrained"
                      placeholder="blurred"
                      alt=""
                    />
                  </div>
                  <div className="mobile-image">
                    <StaticImage
                      src="../assets/img/mobil.png"
                      layout="constrained"
                      placeholder="blurred"
                      alt=""
                    />
                  </div>
                  <div className="icon-area">
                    <a
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                      className="ic1"
                      href="#"
                    >
                      <i className="fas fa-heart"></i>
                    </a>
                    <a
                      data-aos-delay="900"
                      data-aos-duration="2000"
                      data-aos="zoom-in"
                      className="ic2"
                      href="#"
                    >
                      <i className="fas fa-heart"></i>
                    </a>
                    <a
                      data-aos-delay="400"
                      data-aos-duration="1200"
                      data-aos="zoom-in"
                      className="ic3"
                      href="#"
                    >
                      <i className="fas fa-bell"></i>
                    </a>
                    <a
                      data-aos-delay="1600"
                      data-aos-duration="2500"
                      data-aos="zoom-in"
                      className="ic4"
                      href="#"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                    <a
                      data-aos-delay="2000"
                      data-aos-duration="1500"
                      data-aos="zoom-in"
                      className="ic5"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="2500"
                      data-aos-duration="2200"
                      data-aos="zoom-in"
                      className="ic6"
                      href="#"
                    >
                      <i className="fas fa-phone-volume"></i>
                    </a>
                    <a
                      data-aos-delay="2300"
                      data-aos-duration="3000"
                      data-aos="zoom-in"
                      className="ic7"
                      href="#"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <a
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                      className="ic8"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="900"
                      data-aos-duration="2000"
                      data-aos="zoom-in"
                      className="ic9"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="1600"
                      data-aos-duration="2500"
                      data-aos="zoom-in"
                      className="ic10"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="2000"
                      data-aos-duration="1500"
                      data-aos="zoom-in"
                      className="ic11"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="2500"
                      data-aos-duration="2200"
                      data-aos="zoom-in"
                      className="ic12"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="2300"
                      data-aos-duration="3000"
                      data-aos="zoom-in"
                      className="ic13"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
                    <a
                      data-aos-delay="3200"
                      data-aos-duration="3500"
                      data-aos="zoom-in"
                      className="ic14"
                      href="#"
                    >
                      <i className="fas fa-star"></i>
                    </a>
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

export default Hero
