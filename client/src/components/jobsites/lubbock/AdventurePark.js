import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/adventure-park/main.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/adventure-park/lasers.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/adventure-park/ninjazone.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/adventure-park/tower.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/adventure-park/string-lights.jpeg'


function AdventurePark() {


    return(
        <>
        <h1>Adventure Park</h1>
        <ul>
            <li>Adventure Park</li>
            <li>5110 29th Drive</li>
            <li>Lubbock, TX 79407</li>
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
        <div>
            <img width={250} height={250} src={img5} alt=''></img>
        </div>
        
        </>
    )
}

export default AdventurePark