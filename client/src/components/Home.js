
// import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
// import dallasStar from '../images/dallas/dallas-star.jpeg'
// import { NavLink } from 'react-router-dom'
import '../styles/home.css'
import logo from '../images/logo1.png'
// import JobsSlider from './JobsSlider'

// import Button from 'react-bootstrap/Button';

function Home() {

    return(
        <>
       <div className='container-main'>
                       
            <div className='container-home'>
                <div className='container-logo'> 
                    <div className='logo-img'>
                        <img
                        //  width={400} height={250} 
                        style={{'width': '50vw', 'height': 'auto'}}
                        src={logo} alt=''></img>
                    </div>
                    <div className='text-home'>
                        <h4>TECL 31364 </h4>
                        <i><h6>TRUSTED BY THE BEST</h6></i>
                    </div>
                </div>
            </div>
        </div>

            {/* <div className='container-jobs'>
                <div className='box'>
                    <NavLink to='/Dallas'>
                        
                        <div >
                            <img width={250} height={250} src={dallasStar} alt="" ></img>
                        </div>
                    </NavLink>
                </div>
                <div className='box'>
                    <NavLink to='/Lubbock'>
                    
                        <div >
                            <img width={250} height={250} src={lubbockStar} alt="" />
                        </div>
                    </NavLink> 
                </div>
            </div> */}
                
            
          
        {/* <div className="navlinks-container">
            <NavLink to="/Dallas" className="navlink">Dallas Jobs</NavLink>
            <NavLink to="/Lubbock" className="navlink">Lubbock Jobs</NavLink>
        </div> */}

            <JobsSlider />
     
        </>
    )
}

export default Home