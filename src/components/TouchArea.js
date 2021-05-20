import React from "react"

const TouchArea = () => {
  return (
    <>
      <div className="touch-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="touch-wrap">
                <div className="touch-title">
                  <h5>BE IN</h5>
                  <h2>TOUCH</h2>
                  <p>Please fill your contact details below:</p>
                </div>
                <div className="touch-contact-wrap">
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="name" />
                    </div>
                    <div className="single-input-fx">
                      <div className="single-input sing-wd">
                        <input type="text" placeholder="Enter a number" />
                      </div>
                      <div className="single-input sing-wd">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="single-textarea">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="send-btn">
                      <button type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TouchArea
