import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/lobby.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/court.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/cubby.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/datarm.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/hallway.jpeg'
import img6 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/kitchen.jpeg'
import img7 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/room.jpeg'
import img8 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/orchard/outside.jpeg'

function Orchard() {


    return(
        <>
        
        {/* <div>
            <ul>
                <li>Children's Orchard Academy</li>
                <li>5007 98th Street</li>
                <li>Lubbock, TX 79424</li>
            </ul>
        </div> */}

            <div className='container-jobsite-main'>   
                <div className='container-title'>
                    <h1>Children's Orchard Academy</h1>
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
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img4} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img5} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img6} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img7} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img8} alt=''></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orchard