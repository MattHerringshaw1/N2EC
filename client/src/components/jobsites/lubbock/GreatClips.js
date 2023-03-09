import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/main.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/chairs.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/lobby.jpeg'




function GreatClips() {


    return(
        <>

        <div>
            <h1>Great Clips</h1>
        </div>

        <div>
            <ul>
                <li>Great Clips</li>
                <li></li>
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
   
        
      
        </>
    )
}

export default GreatClips