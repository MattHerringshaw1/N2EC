import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/umcp/logo.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/umcp/lights.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/umcp/xray.jpeg'


function Umcp() {


    return(
        <>
        <h1>UMC Family & Children's Clinic</h1>
        <ul>
            <li>UMC Family & Children's Clinic</li>
            <li>9615 Frankford Avenue</li>
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
     
        
        </>
    )
}

export default Umcp