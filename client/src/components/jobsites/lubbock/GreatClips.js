import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/main.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/chairs.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/great-clips/lobby.jpeg'




function GreatClips() {


    return(
        <>
{/* 
        <div>
            <ul>
                <li>Great Clips</li>
                <li></li>
                <li>Lubbock, TX 79424</li>
            </ul>
        </div> */}

       

<div className='container-jobsite-main'>   
    <div className='container-title'>
        <h1>Great Clips</h1>
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
    </div>
</div>
   
        </>
    )
}

export default GreatClips