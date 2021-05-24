import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import logo from "../assets/img/logo.webp"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <>
      <div className="offcanva">
        <div className="cross">
          <a href="#">
            <i className="fal fa-times"></i>
          </a>
        </div>
        <div className="offcanva-menu">
          <ul>
            <li>
              <a href="#">if you’re business</a>
            </li>
            <li>
              <a href="#">for our users</a>
            </li>
            <li>
              <a href="#">covid-19</a>
            </li>
          </ul>
        </div>
        <div className="dwn-brn">
          <a href="#">download</a>
        </div>
      </div>
      <div className="overlay"></div>

      <div className="header-aera">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-fx">
                <div className="header-logo">
                  <Link to="hero" smooth={true} duration={500}>
                    <StaticImage
                      src="../assets/img/logo.webp"
                      alt="logo"
                      placeholder="blurred"
                      layout="fixed"
                      objectFit="contain"
                    />
                  </Link>
                </div>
                <div className="header-menu">
                  <ul>
                    <li>
                      <Link
                        style={{ color: "white" }}
                        to="core"
                        smooth={true}
                        duration={500}
                      >
                        Core
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "white" }}
                        to="about"
                        smooth={true}
                        duration={500}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "white" }}
                        to="contact"
                        smooth={true}
                        duration={500}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
