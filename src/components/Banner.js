import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
  return (
    <div className="relative">
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    >
   
    <div>
      <img src="/amazonslider.jpg" alt="amazon slider" loading="lazy"></img>
    </div>
    <div>
      <img src="/amazonslider1.jpg" alt="amazon slider" loading="lazy"></img>
    </div>
    <div>
      <img src="/amazonslider2.jpg" alt="amazon slider" loading="lazy"></img>
    </div>
    </Carousel>
    </div>
  )
}

export default Banner