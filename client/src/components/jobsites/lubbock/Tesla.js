import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/tesla/pole-lights.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/tesla/chargers.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/tesla/room.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/tesla/strips.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/tesla/strips2.jpeg'

function Tesla() {

    return(
        <>
            <div>
                <div>
                    <h1>Tesla</h1>
                </div>

                <div>
                    <ul>
                        <li>Tesla</li>
                        <li>4414 82nd Street</li>
                        <li>Lubbock, TX 79424</li>
                    </ul>
                </div>

                <div>
                    <img width={250} height={250} src={img1} alt=''></img>
                </div>
                <div>
                    <img width={250} height={250} src={img2} alt=''></img>
                </div>
                <div>
                    <img width={250} height={250} src={img3} alt=''></img>
                </div>
                <div>
                    <img width={250} height={250} src={img4} alt=''></img>
                </div>
                <div>
                    <img width={250} height={250} src={img5} alt=''></img>
                </div>
                
            </div>
        </>
    )
}

export default Tesla