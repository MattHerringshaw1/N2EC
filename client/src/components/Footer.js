import '../styles/footer.css'


function Footer(props) {

    const isMobileView = window.innerWidth <= 768; // Define the breakpoint for mobile view


    return(
        <div className='footer-inline'>
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
        </div>
    )
}

export default Footer