import '../styles/our-team.css'
import logo from '../images/logo1.png'



function OurTeam(props) {

    return(
        <>
        

        <div className='container-contact-main'>
                <div className='container-contact-intro'>
                    <div>
                        <h1>Contact Us Directly!</h1>                    
                    </div>
                    <div>
                        <p>Thank you for considering N2 Electrical Contractors for your project needs. We welcome any questions you may have regarding our services, or if you would like to submit a bid or request more information. Our team is dedicated to providing prompt and professional responses to all inquiries. We understand that every project is unique, and we are committed to working closely with our clients to ensure their needs are met. We appreciate your interest in our company and look forward to hearing from you.</p>
                    </div>
                </div>
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
                        <div className='item-info'>
                            <a href="geo:33.58425,101.84220" >
                                <h6> N2 Electrical Contractors 
                                <br></br>
                                701 Broadway Street
                                <br></br>
                                Lubbock, TX 79401</h6>
                            </a>
                        </div>
                    </div>

                    <div className='container-contact-item'>
                        <div className='item-icon'>
                            <a href="tel:+1-806-993-0024" >
                                <svg viewBox="0 0 1024 1024" fill="red" height="24" width="24" {...props}><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" /></svg>                        
                            </a>
                        </div>
                        <div className='item-info'>
                            <a href="tel:+1-806-993-0024" >
                                <h6>+1 (806) 993-0024</h6>
                            </a>
                        </div>
                    </div>

                    <div className='container-contact-item'>
                        <div className='item-icon'>
                            <a href="mailto: kim@n2ec.com" >
                                <svg viewBox="0 0 24 24" fill="red" height="24" width="24" {...props}><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" /></svg>                        
                            </a>
                        </div>
                        <div className='item-info'>
                            <a href="mailto: kim@n2ec.com" >
                                <h6>Send Us An Email!</h6>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='container-business-main'>


                <div className='container-business-intro'>
                    <div>
                        <h1>Meet Our Management!</h1>
                    </div>
                    <div>
                        <p>At N2 Electrical Contractors, we believe that our team members are our greatest asset. Our talented and diverse staff bring a wealth of experience and expertise to every project we undertake. We take pride in our team's dedication to providing exceptional service and quality workmanship to our clients.</p>
                    </div>
                    
                </div> 

                
                
                <div className='container-business-cards'>

                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Nick Holloway</h5>
                            <i><p>President \ Owner</p></i>
                            <a href="mailto: nick@n2ec.com" >nick@n2ec.com</a>
                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Nathan Jeffs</h5>
                            <i><p>Vice-President</p></i>
                            <a href="mailto: nathan@n2ec.com" >nathan@n2ec.com</a>
                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>David Shithead</h5>
                            <i><p>Electrical Estimator</p></i>
                            <a href="mailto: david@n2ec.com" >david@n2ec.com</a>
                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Kim Cargill</h5>
                            <i><p>Sr. Administrative Coordinator</p></i>
                            <a href="mailto: kim@n2ec.com" >kim@n2ec.com</a>
                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Foreman1</h5>
                            <i><p>Foreman</p></i>
                            <a href="mailto: @n2ec.com" >@n2ec.com</a>
                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Foreman2</h5>
                            <i><p>Foreman</p></i>
                            <a href="mailto: @n2ec.com" >@n2ec.com</a>                        </div>
                    </div>
                    <div className='business-card-container'>
                        <div className="logo-container">
                            <img 
                            style={{ width: '70%', height: 'auto' }} 
                            src={logo} alt=''></img>
                        </div>
                        <div className="contact-info-container">
                            <h5>Foreman3</h5>
                            <i><p>Foreman</p></i>
                            <a href="mailto: @n2ec.com" >@n2ec.com</a>                        </div>
                    </div>


                </div>
                <div>
                            <h4>We believe that by working together anything is possible!</h4>
                    </div>
            </div>

    

        </>
    )
}

export default OurTeam