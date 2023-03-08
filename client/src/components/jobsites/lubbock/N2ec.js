import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/n2ec/lobby.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/n2ec/chandelier.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/n2ec/office-nick.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/n2ec/office-nick2.jpeg'


function N2ec() {


    return(
        <>
        <h1>N2 Electrical Contractors</h1>
        <ul>
            <li>N2 Electrical Contractors</li>
            <li>701 Broadway Street</li>
            <li>Lubbock, TX 79401</li>
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

export default N2ec