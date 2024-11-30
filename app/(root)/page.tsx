import Hero from '@/components/Hero';
import HowSection from '@/components/HowSection';
import Navbar from '@/components/Navbar';
import React from 'react'

const Page = () => {
  return (
    <div className = "h-screen w-screen  top-0   ">
      <div className = "h-20">
        <Navbar/>
      </div>
      <div className = "h-[40rem]">
      <Hero/>
      </div>
      <HowSection/>
      
    </div>
  )
}

export default Page