import { NavLink } from 'react-router-dom';
import '../styles/footer.css'


function Footer(props) {

    // const isMobileView = window.innerWidth <= 768; // Define the breakpoint for mobile view


    return(
        <>
        {/* <div className='footer-inline'>
            <div className="footer">
                <div className='footer-copyright'>
                    <h5>© Copyright to N2 Electrical Contractors | Designed and Managed by 
                        <a  href="https://matthewherringshaw.com/"> MCH</a>
                    </h5>
                </div>
                <div className='footer-address'>
                    <div class='container-contact-info'>
                        <div className='container-contact-item'>
                            <div className='item-icon'>
                            <a href="geo:33.58425,101.84220" >
                                <svg viewBox="0 0 512 512" fill="red" height="24" width="24" {...props}>
                                    <path
                                        fill="none"
                                        stroke="red"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="red"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M304 192 A48 48 0 0 1 256 240 A48 48 0 0 1 208 192 A48 48 0 0 1 304 192 z"
                                    />
                                </svg>
                                </a>
                            </div>
                            <div 
                                style={{ display: isMobileView ? 'none' : 'flex' }}
                                className='item-info'>
                                
                                <a href="geo:33.58425,101.84220" >
                                    <h5> N2 Electrical Contractors 
                                    <br></br>
                                    701 Broadway Street
                                    <br></br>
                                    Lubbock, TX 79401</h5>
                                </a>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
        </div> */}


<div className='footer-inline'>
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h5>Company</h5>
                        <NavLink className='footer_navlink' to='/Work/AllWork'>
                            <p>Our Work</p>
                        </NavLink>
                        <NavLink className='footer_navlink' to='/Careers'>
                            <p>Careers</p>
                        </NavLink>
                        <NavLink className='footer_navlink' to='/OurTeam'>
                            <p>Contact Us</p>
                        </NavLink>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h5>Resources</h5>
                        <a className='footer_a' href='https://www.tdlr.texas.gov/electricians/renew/'>
                            <p>License Renewal</p>
                        </a>
                        <a className='footer_a' href='/employer'>
                            <p>TDLR Links</p>
                        </a>
                        <a className='footer_a' href='/employer'>
                            <p>TDLR Links</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h5>Partners</h5>
                        <a className='footer_a' href='https://henthorncommercialconstruction.com/'>
                            <p>Henthorn Construction</p>                            
                        </a>
                        <a className='footer_a' href='https://www.leelewis.com/'>
                            <p>Lee Lewis Construction</p>
                        </a>
                        <a className='footer_a' href='https://www.tegrity-contractors.com/'>
                            <p>Tegrity Contractors</p>
                        </a>
                        <a className='footer_a' href='https://teinert.com/'>
                            <p>Teinert Construction</p>
                        </a>
                        <a className='footer_a' href='https://wrclubbock.com/'>
                            <p>W.R. Construction</p>
                        </a>
                        
                        
                    </div>
                    <div className='sb_footer-links-div'>
                        <h5>Headquarters</h5>
                        
                        
                            <div 
                                // style={{ display: isMobileView ? 'none' : 'flex' }}
                                // className='item-info'
                                >
                                
                                <a className='footer_a'  href="geo:33.58425,101.84220" >
                                    <p>N2 Electrical Contractors</p>
                                    <p>701 Broadway Street</p>
                                    <p>Lubbock, TX 79401</p>
                                    
                                </a>
                                <a className='footer_a'  href='tel:+1-806-993-0024'>
                                    <p>+1 (806) 993-0024</p>
                                </a>
                            </div>

                        {/* <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a> */}
                        </div>
                    </div>

                <hr></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            ©{new Date().getFullYear()} Copyright to N2 Electrical Contractors | Designed and Managed by 
                        <a className='footer_a' href="https://matthewherringshaw.com/"> MCH</a> 
                        </p>
                    </div> 
                    {/* <div className='sb_footer-below-links'>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    </div> */}
                </div> 
            </div>
            </div>

        </div>
    </>
    )
}

export default Footer