import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/division.css'

import adventurePark from '../images/lubbock/adventure-park/logo3.jpeg'
import guadalupe from '../images/lubbock/guadalupe/logo.jpeg'
import umcp from '../images/lubbock/umcp/logo2.jpeg'
import firestone from '../images/lubbock/firestone/logo3.jpeg'
import n2ec from '../images/lubbock/n2ec/logo.jpeg'
import twinPeaks from '../images/lubbock/twin-peaks/logo.jpeg'
import orchard from '../images/lubbock/orchard/logo.jpeg'
import table82 from '../images/lubbock/table82/logo.jpeg'
import peoplesBank from '../images/lubbock/peoples-bank/logo.jpeg'
import greatClips from '../images/lubbock/great-clips/logo.jpeg'
import lasBrisas from '../images/lubbock/las-brisas/logo.jpeg'
import dominos from '../images/lubbock/dominos/logo.jpeg'
import elMitote from '../images/lubbock/el-mitote/logo.jpeg'
import milan from '../images/lubbock/milan/logo.jpeg'
import tesla from '../images/lubbock/tesla/logo.jpeg'
// import dispatch from '../images/lubbock/umc-dispatch/logo.jpeg'
// import doubleDaves from '../images/lubbock/double-daves/logo.jpeg'



function Lubbock() {
    // const [isHovered, setIsHovered] = useState(false);
    const [isHoveredAdventure, setIsHoveredAdventure] = useState(false);
    const [isHoveredGuad, setIsHoveredGuad] = useState(false);
    const [isHoveredUmcp, setIsHoveredUmcp] = useState(false);
    const [isHoveredFirestone, setIsHoveredFirestone] = useState(false);
    const [isHoveredN2ec, setIsHoveredN2ec] = useState(false);
    const [isHoveredTwin, setIsHoveredTwin] = useState(false);
    const [isHoveredOrchard, setIsHoveredOrchard] = useState(false);
    const [isHoveredTable82, setIsHoveredTable82] = useState(false);
    const [isHoveredPeoples, setIsHoveredPeoples] = useState(false);
    const [isHoveredClips, setIsHoveredClips] = useState(false);
    const [isHoveredLasBrisas, setIsHoveredLasBrisas] = useState(false);

    const [isHoveredDominos, setIsHoveredDominos] = useState(false);
    const [isHoveredMitote, setIsHoveredMitote] = useState(false);
    const [isHoveredTesla, setIsHoveredTesla] = useState(false);
    const [isHoveredMilan, setIsHoveredMilan] = useState(false);
    // const [isHoveredDispatch, setIsHoveredDispatch] = useState(false);
    // const [isHoveredDaves, setIsHoveredDaves] = useState(false);

    

    return(
        <>
        <div className='container-division'>
            
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/AdventurePark'>
                    <div className='box-lbk'>
                        <div className='job-photo'>
                            <img 
                                width={250} height={250} 
                                src={adventurePark} alt=""
                                onMouseEnter={() => setIsHoveredAdventure(true)}
                                onMouseLeave={() => setIsHoveredAdventure(false)}
                            />
                         </div>
                        <div className={`offset-heading ${isHoveredAdventure ? 'hidden' : ''}`}>
                            <h4>Adventure Park</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/DominosPizza'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={dominos} alt="" 
                            onMouseEnter={() => setIsHoveredDominos(true)}
                            onMouseLeave={() => setIsHoveredDominos(false)}
                        />
                        <div className={`offset-heading ${isHoveredDominos ? 'hidden' : ''}`}>
                            <h4>Domino's Pizza</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/ElMitote'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={elMitote} alt="" 
                        onMouseEnter={() => setIsHoveredMitote(true)}
                        onMouseLeave={() => setIsHoveredMitote(false)}
                        />
                        <div className={`offset-heading ${isHoveredMitote ? 'hidden' : ''}`}>
                            <h4>El Mitote</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/Firestone'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={firestone} alt="" 
                            onMouseEnter={() => setIsHoveredFirestone(true)}
                            onMouseLeave={() => setIsHoveredFirestone(false)}
                        />
                        <div className={`offset-heading ${isHoveredFirestone ? 'hidden' : ''}`}>
                            <h4>Firestone</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/GreatClips'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={greatClips} alt="" 
                            onMouseEnter={() => setIsHoveredClips(true)}
                            onMouseLeave={() => setIsHoveredClips(false)}
                        />
                        <div className={`offset-heading ${isHoveredClips ? 'hidden' : ''}`}>
                            <h4>Great Clips</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/GuadalupeVillas'>
                    <div className='box-lbk'>
                        <div>
                            <img width={250} height={250} src={guadalupe} alt=""
                            onMouseEnter={() => setIsHoveredGuad(true)}
                            onMouseLeave={() => setIsHoveredGuad(false)}
                            />
                            <div className={`offset-heading ${isHoveredGuad ? 'hidden' : ''}`}>
                                <h4>Guadalupe Villas</h4>
                            </div>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/LasBrisas'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={lasBrisas} alt="" 
                            onMouseEnter={() => setIsHoveredLasBrisas(true)}
                            onMouseLeave={() => setIsHoveredLasBrisas(false)}
                        />
                        <div className={`offset-heading ${isHoveredLasBrisas ? 'hidden' : ''}`}>
                            <h4>Las Brisas</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/Milan'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={milan} alt="" 
                        onMouseEnter={() => setIsHoveredMilan(true)}
                        onMouseLeave={() => setIsHoveredMilan(false)}
                        />
                        <div className={`offset-heading ${isHoveredMilan ? 'hidden' : ''}`}>
                            <h4>Milan</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/N2ElectricalContractors'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={n2ec} alt="" 
                            onMouseEnter={() => setIsHoveredN2ec(true)}
                            onMouseLeave={() => setIsHoveredN2ec(false)}
                        />
                        <div className={`offset-heading ${isHoveredN2ec ? 'hidden' : ''}`}>
                            <h4>N2 Electrical Contractors</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/ChildrensOrchardAcademy'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={orchard} alt="" 
                            onMouseEnter={() => setIsHoveredOrchard(true)}
                            onMouseLeave={() => setIsHoveredOrchard(false)}
                        />
                        <div className={`offset-heading ${isHoveredOrchard ? 'hidden' : ''}`}>
                            <h4>Children's Orchard Academy</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/PeoplesBank'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={peoplesBank} alt="" 
                            onMouseEnter={() => setIsHoveredPeoples(true)}
                            onMouseLeave={() => setIsHoveredPeoples(false)}
                        />
                        <div className={`offset-heading ${isHoveredPeoples ? 'hidden' : ''}`}>
                            <h4>Peoples Bank</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/Table82'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={table82} alt="" 
                            onMouseEnter={() => setIsHoveredTable82(true)}
                            onMouseLeave={() => setIsHoveredTable82(false)}
                        />
                        <div className={`offset-heading ${isHoveredTable82 ? 'hidden' : ''}`}>
                            <h4>Table 82</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/Tesla'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={tesla} alt="" 
                        onMouseEnter={() => setIsHoveredTesla(true)}
                        onMouseLeave={() => setIsHoveredTesla(false)}
                        />
                        <div className={`offset-heading ${isHoveredTesla ? 'hidden' : ''}`}>
                            <h4>Tesla</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/TwinPeaks'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={twinPeaks} alt="" 
                            onMouseEnter={() => setIsHoveredTwin(true)}
                            onMouseLeave={() => setIsHoveredTwin(false)}
                        />
                        <div className={`offset-heading ${isHoveredTwin ? 'hidden' : ''}`}>
                            <h4>Twin Peaks</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job' >
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/UMC-Family&ChildrensClinic'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={umcp} alt="" 
                            onMouseEnter={() => setIsHoveredUmcp(true)}
                            onMouseLeave={() => setIsHoveredUmcp(false)}
                        />
                        <div className={`offset-heading ${isHoveredUmcp ? 'hidden' : ''}`}>
                            <h4>UMC Family & Children's Hospital</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>

            {/* <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/UMC-Dispatch'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={dispatch} alt="" 
                        onMouseEnter={() => setIsHoveredDispatch(true)}
                        onMouseLeave={() => setIsHoveredDispatch(false)}
                        />
                        <div className={`offset-heading ${isHoveredDispatch ? 'hidden' : ''}`}>
                            <h4>UMC Dispatch</h4>
                        </div>
                    </div>
                </NavLink> 
            </div>
            <div className='container-job'>
                <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/DoubleDaves'>
                    <div className='box-lbk'>
                        <img width={250} height={250} src={doubleDaves} alt="" 
                        onMouseEnter={() => setIsHoveredDaves(true)}
                        onMouseLeave={() => setIsHoveredDaves(false)}
                        />
                        <div className={`offset-heading ${isHoveredDaves ? 'hidden' : ''}`}>
                            <h4>Double Daves</h4>
                        </div>
                    </div>
                </NavLink> 
            </div> */}

        </div>
        
        </>
        
    )
}


export default Lubbock