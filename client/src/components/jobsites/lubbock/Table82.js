import img1 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/table82/bar.jpeg'
import img2 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/table82/booth.jpeg'
import img3 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/table82/dining.jpeg'
import img4 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/table82/table.jpeg'
import img5 from '/Users/mattherringshaw/Desktop/n2ec/client/src/images/lubbock/table82/patio.jpeg'


function Table82() {


    return(
        <>

        {/* <div>
            <ul>
                <li>Table 82</li>
                <li>4210 82nd Street</li>
                <li>Lubbock, TX 79423</li>
            </ul>
        </div> */}

        

            <div>   
                <div className='container-title'>
                    <h1>Table 82</h1>
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
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img4} alt=''></img>
                    </div>
                    <div className='box-jobsite'>
                        <img width={250} height={250} src={img5} alt=''></img>
                    </div>
                </div>
            </div>
      
        </>
    )
}

export default Table82