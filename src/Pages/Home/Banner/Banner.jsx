import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BannerImg1 from "../../../assets/banner/banner1.png"
import BannerImg2 from "../../../assets/banner/banner2.png"
import BannerImg3 from "../../../assets/banner/banner3.png"
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
   <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={BannerImg1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={BannerImg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={BannerImg3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default Banner