import '../styles/our-team.css'
import logo from '../images/logo1.png'



function OurTeam() {

    return(
        <>
        
{/* 
        <div className="business-card-container">
        <div className="logo-container">
            <img src={logo} alt="company logo" />
        </div>
        <div className="contact-info-container">
            <h2>Nick Holloway</h2>
            <p>President | Owner</p>
            <p>PM, Sr. Field Superintendent</p>
            <p>Email: nick@n2ec.com</p>
        </div>
    </div> */}
        

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
                            <h5>Kim Kargill</h5>
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