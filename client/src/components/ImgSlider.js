// import {  useState } from 'react'
// import {  useEffect } from 'react'


import '../styles/img-slider.css'
// import imageSlide from './data';


// const ImgSlider = () => {

//     const [currentPhoto, setCurrentPhoto] = useState(0)
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if(currentPhoto===3){
//                 setCurrentPhoto(0)
//             }else{
//                 setCurrentPhoto(currentPhoto + 1)
//             }
//         }, 4000)
//         return () => clearTimeout(timer)
//     },[currentPhoto])
//     const bgImgStyle = {
//         backgroundImage: `url(${imageSlide[currentPhoto].url})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         height: '100%',
//     }

//     const goToNext = (currentPhoto) => {
//         setCurrentPhoto(currentPhoto)
//     }
   
//        return(
//         <div className='container'>
//             <div style={bgImgStyle}></div>
//             {/* <div className='transparent-background'></div> */}
//             <div>
//                 <div className='carousel'>
//                     {
//                     imageSlide.map((imageSlide, currentPhoto) => (
//                         <span 
//                         key={currentPhoto} 
//                         onClick={() => goToNext(currentPhoto)}></span>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     )   
// }


// export default ImgSlider

import Carousel from 'react-bootstrap/Carousel';

function ImgSlider() {

    return (
        <div className='container'>
        <Carousel  pause='false' fade>
            
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src="../res1.png"
                alt=""
            />
            </Carousel.Item>
           
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src="../res2.png"
                alt=""
            />
            </Carousel.Item>
           
            <Carousel.Item interval={3000}>
            <img
                className="d-block w-100"
                src="../res3.png"
                alt=""
            />
            </Carousel.Item>
            
        </Carousel>
        </div>
      );
}


export default ImgSlider