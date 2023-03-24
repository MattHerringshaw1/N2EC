
import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
import dallasStar from '../images/dallas/dallas-star.jpeg'
import { NavLink } from 'react-router-dom'
import '../styles/home.css'
import logo from '../images/logo1.png'

function Home() {

    return(
        <>
       
                       
        <div className='container-home'>
            <div className='container-logo'> 
                <div>
                    <img width={400} height={250} src={logo} alt=''></img>
                </div>
                <div className='text-home'>
                    <h6>TECL 31364 </h6>
                    <h6>Trusted by the best</h6>
                </div>
            </div>
            <div className='container-jobs'>
                <div className='box'>
                    <NavLink to='/Dallas'>
                        <div className='img-home'>
                            <img width={250} height={250} src={dallasStar} alt="" ></img>
                        </div>
                    </NavLink>
                </div>
                <div className='box'>
                    <NavLink to='/Lubbock'>
                        <div className='img-home'>
                            <img width={250} height={250} src={lubbockStar} alt="" />
                        </div>
                    </NavLink> 
                </div>
            </div>
        </div>
                        
                    
                
        </>
    )
}

export default Home