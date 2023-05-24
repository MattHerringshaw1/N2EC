import "../styles/categories.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import umcp from '../images/lubbock/umcp/logo2.jpeg'


function Medical() {

    const [isHoveredUmcp, setIsHoveredUmcp] = useState(false);

    return(
        <>
        
            <div className="categories-container-main">
                
                <div className="categories-container-title">
                    <h1>Medical</h1>
                </div>    
                <div className="categories-container-category">
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
                </div>

            </div>
        </>
    )
}

export default Medical