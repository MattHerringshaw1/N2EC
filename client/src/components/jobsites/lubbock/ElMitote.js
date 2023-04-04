import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/el-mitote/lighting.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/el-mitote/room.jpeg'

import '/Users/mattherringshaw/Desktop/n2ec/client/src/styles/jobsite.css'


function ElMitote() {

    return(
        <>
          

                {/* <div>
                    <ul>
                        <li>El Mitote</li>
                        <li>4525 Milwaukee Avenue</li>
                        <li>Lubbock, TX 79407</li>
                    </ul>
                </div> */}



            <div>   
                <div className='container-title'>
                    <h1>El Mitote</h1>
                </div>
                <div className='container-jobsite'>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img1} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img2} alt=''></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ElMitote