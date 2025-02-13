import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import About from '../../components/about/About'
import Qualities from '../../components/qualities/Qualities'
import WhoAreWe from '../../components/whoarewe/WhoAreWe'
import Team from '../../components/team/Team'
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="homeContainer">
      <HeroSection/>
      <About/>
      <Qualities/>
      <WhoAreWe/>
      <Team/> 
      <Footer/>
      </div>
    </>
  )
}

export default Home
