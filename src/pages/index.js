import React from "react"
import About from "../components/About"
import Core from "../components/Core"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import TouchArea from "../components/TouchArea"

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Core />
        <About />
        <TouchArea />
      </Layout>
    </>
  )
}

export default Home
