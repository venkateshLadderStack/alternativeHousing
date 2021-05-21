import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.js"
import "aos/dist/aos.css"
import Slider from "react-slick"
import heroImg1 from "../assets/img/hero-img.webp"
import heroImg2 from "../assets/img/hero-img2.webp"
import heroImg3 from "../assets/img/hero-img3.webp"
import mobileImg from "../assets/img/mobil.png"
import { Link } from "react-scroll"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    })
  })

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  }

  return (
    <>
      <div className="hero-area" id="hero">
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
                  <Link
                    to="core"
                    className="learn-more"
                    style={{ color: "white" }}
                  >
                    LEARN MORE
                  </Link>
                </div>
                <div className="hero-inner">
                  <div className="hero-img">
                    <Slider
                      style={{ zIndex: 10, marginTop: 0, padding: 0 }}
                      {...settings}
                    >
                      <div>
                        <StaticImage
                          src="../assets/img/hero-img.webp"
                          alt=""
                          placeholder="blurred"
                          layout="constrained"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <StaticImage
                          src="../assets/img/hero-img2.webp"
                          alt=""
                          placeholder="blurred"
                          layout="constrained"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <StaticImage
                          src="../assets/img/hero-img3.webp"
                          alt=""
                          placeholder="blurred"
                          layout="constrained"
                          objectFit="cover"
                        />
                      </div>
                    </Slider>
                  </div>
                  <div className="mobile-image">
                    {/* <StaticImage
                      src="../assets/img/mobil.png"
                      layout="constrained"
                      placeholder="dominantColor"
                      alt=""
                      objectFit="contain"
                    /> */}
                    <img src={mobileImg} alt="" />
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
