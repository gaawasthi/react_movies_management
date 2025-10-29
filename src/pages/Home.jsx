import React from 'react'
import HeroSection from '../components/HeroSection'
import Toprated from '../components/Toprated'
import Upcoming from '../components/Upcoming'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <div   >
      <HeroSection/>
      <Toprated/>
      <Upcoming/>
      <Popular/>
      
    </div>
  )
}

export default Home