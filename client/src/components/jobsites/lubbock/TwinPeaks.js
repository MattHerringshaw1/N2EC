import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/twin-peaks/main.png'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/twin-peaks/main2.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/twin-peaks/bar.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/twin-peaks/booth.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/twin-peaks/antler.jpeg'


function TwinPeaks() {


    return(
        <>
        <div>
            <h1>Twin Peaks</h1>
        </div>
        <ul>
            <li>Twin Peaks</li>
            <li>6012 Marsha Sharp Fwy West</li>
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

export default TwinPeaks