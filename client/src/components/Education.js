import "../styles/categories.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import orchard from '../images/lubbock/orchard/logo.jpeg'


            

function Education() {

    const [isHoveredOrchard, setIsHoveredOrchard] = useState(false);

    return(
        <>
            <div className="categories-container-main">
                

                <div className="categories-container-title">
                    <h1>Education</h1>
                </div>    
                <div className="categories-container-category">
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
                </div>

            </div>
        </>
    )
}

export default Education