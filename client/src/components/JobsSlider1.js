// import React, { useState, useEffect, useRef } from "react";
import '../styles/jobs-slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import adventure from '../images/lubbock/adventure-park/logo.png'
import dominos from '../images/lubbock/dominos/logo.jpeg'
import guadalupe from '../images/lubbock/guadalupe/logo.jpeg'
import umcp from '../images/lubbock/umcp/logo2.jpeg'
import firestone from '../images/lubbock/firestone/logo3.jpeg'
import n2ec from '../images/lubbock/n2ec/logo.jpeg'
import twinPeaks from '../images/lubbock/twin-peaks/logo.jpeg'
import orchard from '../images/lubbock/orchard/logo.jpeg'
import table82 from '../images/lubbock/table82/logo.jpeg'
import peoplesBank from '../images/lubbock/peoples-bank/logo.jpeg'
import greatClips from '../images/lubbock/great-clips/logo.jpeg'
import lasBrisas from '../images/lubbock/las-brisas/logo.jpeg'
import elMitote from '../images/lubbock/el-mitote/logo.jpeg'
import milan from '../images/lubbock/milan/logo.jpeg'
import tesla from '../images/lubbock/tesla/logo.jpeg'


function JobsSlider() {
   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return(
        <>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>                
                <div>
                    <img src={adventure} alt='error' />
                </div>
                <div>
                    <img src={dominos} alt='error' />
                </div>
  
            </Carousel>;



        </>
    )
}

export default JobsSlider