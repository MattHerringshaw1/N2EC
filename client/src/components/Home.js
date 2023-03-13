
import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
import dallasStar from '../images/dallas/dallas-star.jpeg'
import logo from '../images/logo1.png'
import { NavLink } from 'react-router-dom'

function Home() {

    return(
        <>
            <div>
                <div>
                    <img width={500} height={400} src={logo} alt=''></img>
                    <h6>TECL 31364 </h6>
                    <h6>Trusted by the best</h6>
                </div>
            </div>
            <div>
                <div>
                    <NavLink to='/Dallas'>
                        <div>
                            <img width={250} height={250} src={dallasStar} alt="" ></img>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/Lubbock'>
                        <div>
                            <img width={250} height={250} src={lubbockStar} alt="" />
                        </div>
                    </NavLink> 
                </div>
            </div>
        </>
    )
}

export default Home