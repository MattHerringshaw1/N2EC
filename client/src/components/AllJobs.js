import "../styles/all-jobs.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import dominos from '../images/lubbock/dominos/logo.jpeg'
import elMitote from '../images/lubbock/el-mitote/logo.jpeg'
import lasBrisas from '../images/lubbock/las-brisas/logo.jpeg'
import twinPeaks from '../images/lubbock/twin-peaks/logo.jpeg'
import table82 from '../images/lubbock/table82/logo.jpeg'

// import education from '../images/lubbock/dominos/logo.jpeg'
// import Medical from '../images/lubbock/el-mitote/logo.jpeg'
// import restaurants from '../images/lubbock/las-brisas/logo.jpeg'
// import retail from '../images/lubbock/twin-peaks/logo.jpeg'
// import tennant from '../images/lubbock/table82/logo.jpeg'


function AllJobs() {

    const [isHoveredDominos, setIsHoveredDominos] = useState(false);
    const [isHoveredMitote, setIsHoveredMitote] = useState(false);
    const [isHoveredLasBrisas, setIsHoveredLasBrisas] = useState(false);
    const [isHoveredTwin, setIsHoveredTwin] = useState(false);
    const [isHoveredTable82, setIsHoveredTable82] = useState(false);
    
    // const [isHoveredEducation, setIsHoveredEducation] = useState(false);
    // const [isHoveredMedical, setIsHoveredMedical] = useState(false);
    // const [isHoveredRestaurants, setIsHoveredRestaurants] = useState(false);
    // const [isHoveredRetail, setIsHoveredRetail] = useState(false);
    // const [isHoveredTennant, setIsHoveredTennant] = useState(false);

    return(
        <>
            <div className="all-jobs-container-main">
                    
                    <div className="all-jobs-container-title">
                        <h1>Our Work</h1>
                    </div>
                    <div className="all-jobs-container-category">
                        <div className='all-jobs-container-job'>
                            <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Work/Education'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={dominos} alt="" 
                                        onMouseEnter={() => setIsHoveredDominos(true)}
                                        onMouseLeave={() => setIsHoveredDominos(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredDominos ? 'hidden' : ''}`}>
                                        <h4>Education</h4>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>
                       
                        <div className='container-job'>
                            <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Work/Medical'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={elMitote} alt="" 
                                    onMouseEnter={() => setIsHoveredMitote(true)}
                                    onMouseLeave={() => setIsHoveredMitote(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredMitote ? 'hidden' : ''}`}>
                                        <h4>Medical</h4>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>
                        <div className='container-job'>
                            <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Work/Restaurants'>
                                <div className='category-box'>
                                    <img width={250} height={250} src={lasBrisas} alt="" 
                                        onMouseEnter={() => setIsHoveredLasBrisas(true)}
                                        onMouseLeave={() => setIsHoveredLasBrisas(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredLasBrisas ? 'hidden' : ''}`}>
                                        <h4>Restaurants</h4>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>
                        <div className='container-job'>
                            <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Work/Retail'>
                                <div className='box-lbk'>
                                    <img width={250} height={250} src={table82} alt="" 
                                        onMouseEnter={() => setIsHoveredTable82(true)}
                                        onMouseLeave={() => setIsHoveredTable82(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredTable82 ? 'hidden' : ''}`}>
                                        <h4>Retail</h4>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>
                        <div className='container-job'>
                            <NavLink style={{ textDecoration: 'none', color:'black' }} to='/Work/TennantFinishOuts'>
                                <div className='box-lbk'>
                                    <img width={250} height={250} src={twinPeaks} alt="" 
                                        onMouseEnter={() => setIsHoveredTwin(true)}
                                        onMouseLeave={() => setIsHoveredTwin(false)}
                                    />
                                    <div className={`offset-heading ${isHoveredTwin ? 'hidden' : ''}`}>
                                        <h4>Tennant Finish-Outs</h4>
                                    </div>
                                </div>
                            </NavLink> 
                        </div>
                    </div>
    
    
                </div>
        </>
    )
}

export default AllJobs