import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Navbar from './Navbar/Nav'
import Footer from './Footer/Footer'
import AboutMe from './AboutMe/AboutMe'
import Skill from './Skill/Skill'

const Home = () => {
  return(
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <Footer />
    </div>
  )
}

export default Home