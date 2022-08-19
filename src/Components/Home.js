import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import GallerySlider from './GallerySlider'
import Newarrival from './Newarrival'
import Bottomslider from './Bottomslider'
import Contact from './Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <p>sad</p> */}
      <Slider />
<GallerySlider/>
 <Newarrival/>
 <Bottomslider/>
 <Contact/>
      <Footer />

    </>
  )
}
