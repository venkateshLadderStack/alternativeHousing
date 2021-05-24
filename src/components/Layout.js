import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../assets/css/all.min.css"
import "../assets/css/fontawesome.css"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/default.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/slick.css"
import "../assets/css/aos.css"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
