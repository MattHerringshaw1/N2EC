import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/common.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/bathroom.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/bath2.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/closet.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/fan.jpeg'
import img6 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/kitchen-plugs.jpeg'
import img7 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/living2.jpeg'
import img8 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/livingrm.jpeg'
import img9 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/pendents.jpeg'
import img10 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/saloon.jpeg'
import img11 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/track.jpeg'
import img12 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/washer-dryer.jpeg'
import img13 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/guadalupe/workout.jpeg'

function Guadalupe() {


    return(
        <>
        {/* <ul>
            <li>Guadalupe Villas</li>
            <li>1001 3rd Street</li>
            <li>Lubbock, TX 79401</li>
        </ul> */}

            <div>   
                <div className='container-title'>
                    <h1>Guadalupe Villas</h1>
                </div>
                <div className='container-jobsite'>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img1} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img2} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img3} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img4} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img5} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img6} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img7} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img8} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img9} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img10} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img11} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img12} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250}  src={img13} alt=''></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guadalupe