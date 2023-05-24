import "../styles/categories.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import dominos from '../images/lubbock/dominos/logo.jpeg'
import elMitote from '../images/lubbock/el-mitote/logo.jpeg'
import lasBrisas from '../images/lubbock/las-brisas/logo.jpeg'
import twinPeaks from '../images/lubbock/twin-peaks/logo.jpeg'
import table82 from '../images/lubbock/table82/logo.jpeg'






function Restaurants() {

    const [isHoveredDominos, setIsHoveredDominos] = useState(false);
    const [isHoveredMitote, setIsHoveredMitote] = useState(false);
    const [isHoveredLasBrisas, setIsHoveredLasBrisas] = useState(false);
    const [isHoveredTwin, setIsHoveredTwin] = useState(false);
    const [isHoveredTable82, setIsHoveredTable82] = useState(false);


    return(
        <>
            <div className="categories-container-main">
                    
                <div className="categories-container-title">
                    <h1>Restaurants</h1>
                </div>
                <div className="categories-container-category">
                    <div className='categories-container-job'>
                        <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/DominosPizza'>
                            <div className='category-box'>
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
                            <div className='category-box'>
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
                        <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Lubbock/LasBrisas'>
                            <div className='category-box'>
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
                </div>


            </div>
        </>
    )
}

export default Restaurants