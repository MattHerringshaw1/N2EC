import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/lighting.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/conference.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/room.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/waiting.jpeg'

function PeoplesBank() {

    return(
        <>
                {/* <div>
                    <ul>
                        <li>Peoples Bank</li>
                        <li>5820 82nd Street</li>
                        <li>Lubbock, TX 79424</li>
                    </ul>
                </div> */}

                
            <div className='container-jobsite-main'>   
                <div className='container-title'>
                    <h1>Peoples Bank</h1>
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
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img4} alt=''></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PeoplesBank