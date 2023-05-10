import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/las-brisas/lighting.jpeg'

function LasBrisas() {

    return(
        <>
            
                {/* <div>
                    <ul>
                        <li>Las Brisas Southwest Steakhouse</li>
                        <li>550 S Buchanan Street</li>
                        <li>Amarillo, TX 79101</li>
                    </ul>
                </div> */}

            <div className='container-jobsite-main'>   
                <div className='container-title'>
                    <h1>Las Brisas</h1>
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

export default LasBrisas