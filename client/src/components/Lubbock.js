// import adventurePark from '../images/lubbock/adventure-park/logo.png'
import adventurePark from '../images/lubbock/adventure-park/logo3.jpeg'
import guadalupe from '../images/lubbock/guadalupe/logo.jpeg'
import umcp from '../images/lubbock/umcp/logo2.jpeg'
import firestone from '../images/lubbock/firestone/logo3.jpeg'
import n2ec from '../images/lubbock/n2ec/logo.jpeg'
import { NavLink } from 'react-router-dom'

import '../styles/lubbock.css'


function Lubbock() {


    return(
        <>
            <h1>lubbock jobs</h1>
        <div >
            
            <div >
                <NavLink to='/Lubbock/Adventure-Park'>
                    <div>
                        <img width={250} height={250} src={adventurePark} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/Guadalupe-Villas'>
                    <div>
                        <img width={250} height={250} src={guadalupe} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/UMCP'>
                    <div>
                        <img width={250} height={250} src={umcp} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/Firestone'>
                    <div>
                        <img width={250} height={250} src={firestone} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/N2EC'>
                    <div>
                        <img width={250} height={250} src={n2ec} alt="" />
                    </div>
                </NavLink> 
            </div>
        </div>
        </>
        
    )
}


export default Lubbock