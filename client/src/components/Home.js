
import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
import dallasStar from '../images/dallas/dallas-star.jpeg'
import { NavLink } from 'react-router-dom'

function Home() {

    return(
        <>
            
            <div>
                <div>
                    <NavLink to='/Lubbock'>
                        <div>
                            <img src={lubbockStar} alt="" />
                        </div>
                    </NavLink> 
                </div>
                <div>
                    <NavLink to='/Dallas'>
                        <div>
                            <img src={dallasStar} alt="" ></img>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Home