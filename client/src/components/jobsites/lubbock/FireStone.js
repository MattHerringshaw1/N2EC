import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/firestone/lights.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/firestone/lift.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/firestone/lifts.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/firestone/lifts2.jpeg'


function FireStone() {


    return(
        <>
        <h1>Firestone Complete Auto Care</h1>
        <ul>
            <li>Firestone Complete Auto Care</li>
            <li>6507 82nd Street</li>
            <li>Lubbock, TX 79424</li>
        </ul>

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
     
        
        </>
    )
}

export default FireStone