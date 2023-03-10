// import adventurePark from '../images/lubbock/adventure-park/logo.png'
import adventurePark from '../images/lubbock/adventure-park/logo3.jpeg'
import guadalupe from '../images/lubbock/guadalupe/logo.jpeg'
import umcp from '../images/lubbock/umcp/logo2.jpeg'
import firestone from '../images/lubbock/firestone/logo3.jpeg'
import n2ec from '../images/lubbock/n2ec/logo.jpeg'
import twinPeaks from '../images/lubbock/twin-peaks/logo.jpeg'
import orchard from '../images/lubbock/orchard/logo.jpeg'
import table82 from '../images/lubbock/table82/logo.jpeg'
import dispatch from '../images/lubbock/umc-dispatch/logo.jpeg'
import peoplesBank from '../images/lubbock/peoples-bank/logo.jpeg'
import greatClips from '../images/lubbock/great-clips/logo.jpeg'
import lasBrisas from '../images/lubbock/las-brisas/logo.jpeg'
import dominos from '../images/lubbock/dominos/logo.jpeg'
import elMitote from '../images/lubbock/el-mitote/logo.jpeg'
import doubleDaves from '../images/lubbock/double-daves/logo.jpeg'
import milan from '../images/lubbock/milan/logo.jpeg'
import tesla from '../images/lubbock/tesla/logo.jpeg'
import { NavLink } from 'react-router-dom'


import '../styles/lubbock.css'


function Lubbock() {


    return(
        <>
            <h1>lubbock jobs</h1>
        <div >
            
            <div >
                <NavLink to='/Lubbock/AdventurePark'>
                    <div>
                        <img width={250} height={250} src={adventurePark} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/GuadalupeVillas'>
                    <div>
                        <img width={250} height={250} src={guadalupe} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/UMC-Family&ChildrensClinic'>
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
            <div >
                <NavLink to='/Lubbock/TwinPeaks'>
                    <div>
                        <img width={250} height={250} src={twinPeaks} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/ChildrensOrchardAcademy'>
                    <div>
                        <img width={250} height={250} src={orchard} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/Table82'>
                    <div>
                        <img width={250} height={250} src={table82} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/PeoplesBank'>
                    <div>
                        <img width={250} height={250} src={peoplesBank} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/GreatClips'>
                    <div>
                        <img width={250} height={250} src={greatClips} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/LasBrisas'>
                    <div>
                        <img width={250} height={250} src={lasBrisas} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/DominosPizza'>
                    <div>
                        <img width={250} height={250} src={dominos} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/ElMitote'>
                    <div>
                        <img width={250} height={250} src={elMitote} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/Milan'>
                    <div>
                        <img width={250} height={250} src={milan} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                <NavLink to='/Lubbock/Tesla'>
                    <div>
                        <img width={250} height={250} src={tesla} alt="" />
                    </div>
                </NavLink> 
            </div>
            <div >
                    <div>
                        <img width={250} height={250} src={dispatch} alt="" />
                    </div>
            </div>
            <div >
                    <div>
                        <img width={250} height={250} src={doubleDaves} alt="" />
                    </div>
            </div>
        </div>
        </>
        
    )
}


export default Lubbock