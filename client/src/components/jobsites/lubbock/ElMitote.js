import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/el-mitote/lighting.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/el-mitote/room.jpeg'

function ElMitote() {

    return(
        <>
            <div>
                <div>
                    <h1>El Mitote</h1>
                </div>

                <div>
                    <ul>
                        <li>El Mitote</li>
                        <li>4525 Milwaukee Avenue</li>
                        <li>Lubbock, TX 79407</li>
                    </ul>
                </div>

                <div>
                    <img width={250} height={250} src={img1} alt=''></img>
                </div>
                <div>
                    <img width={250} height={250} src={img2} alt=''></img>
                </div>
                
            </div>
        </>
    )
}

export default ElMitote