import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/milan/lobby1.webp'

function Milan() {

    return(
        <>
            
                {/* <div>
                    <ul>
                        <li>Milan Laser Hair Removal</li>
                        <li>4414 82nd Street</li>
                        <li>Lubbock, TX 79424</li>
                    </ul>
                </div> */}

            <div className='container-jobsite-main'>   
                <div className='container-title'>
                    <h1>Milan Laser Hair Removal</h1>
                    <h3>Lubbock, TX</h3>
                </div>
                <div className='container-jobsite'>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img1} alt=''></img>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Milan