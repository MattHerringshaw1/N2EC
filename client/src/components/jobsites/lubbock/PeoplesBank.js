import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/lighting.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/conference.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/room.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/peoples-bank/waiting.jpeg'



function PeoplesBank() {


    return(
        <>

        <div>
            <h1>Peoples Bank</h1>
        </div>

        <div>
            <ul>
                <li>Peoples Bank</li>
                <li>5820 82nd St</li>
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
        
      
        </>
    )
}

export default PeoplesBank