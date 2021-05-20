import { StaticImage } from "gatsby-plugin-image"
import React from "react"

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
                  <a href="#">
                    <StaticImage
                      src="../assets/img/logo.webp"
                      alt=""
                      layout="constrained"
                      placeholder="blurred"
                    />
                  </a>
                </div>
                <div className="header-menu">
                  <ul>
                    <li>
                      <a href="#">Core</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
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
