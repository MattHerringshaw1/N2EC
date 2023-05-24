import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/dominos/main.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/dominos/main1.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/dominos/main2.jpeg'

import '/Users/mattherringshaw/Desktop/n2ec/client/src/styles/jobsite.css'


function Dominos() {

    return(
        <>
            
                {/* <div>
                    <ul>
                        <li>Domino's Pizza</li>
                        <li>4525 Milwaukee Avenue</li>
                        <li>Lubbock, TX 79407</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Domino's Pizza</li>
                        <li>13404 Indiana Avenue</li>
                        <li>Lubbock, TX 79423</li>
                    </ul>
                </div> */}




            <div className='container-jobsite-main'>   
                <div className='container-title'>
                    <h1>Domino's Pizza</h1>
                    <h3>Lubbock, TX</h3>
                </div>

                <div className='container-jobsite'>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img1} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img2} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img3} alt=''></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dominos