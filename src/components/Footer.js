import React from "react"

const Footer = () => {
  return (
    <>
      {/* <!-- footer-area-start --> */}

      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-fx">
                <div className="footer-icon">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    <a href="#">info@alternativehg.com </a> <span> | </span> 24
                    Raffles Place, #28 Clifford Centre, Singapore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer-area-end --> */}

      {/* <!-- copyright-area-start --> */}

      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right-content">
                <p>© 2021 by Alternative Housing Group, Pte. Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- copyright-area-end -->    */}
    </>
  )
}

export default Footer
