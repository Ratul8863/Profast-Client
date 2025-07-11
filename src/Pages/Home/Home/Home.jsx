import React from 'react'
import Banner from '../Banner/Banner'
import OurServices from '../Services/OurServices'
import ClientLogos from '../ClientLogos/ClientLogos'
import Benefits from '../Benifits/Benefits'
import Bemarchent from '../Bemarchent/Bemarchent'
import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel'

function Home() {
  return (
    <div>

      <Banner></Banner>
      <OurServices></OurServices>
      <ClientLogos></ClientLogos>
      <Benefits></Benefits>
      <Bemarchent></Bemarchent>
      <TestimonialCarousel></TestimonialCarousel>
    </div>
  )
}

export default Home