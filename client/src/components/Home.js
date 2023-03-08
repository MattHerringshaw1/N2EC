
import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
import dallasStar from '../images/dallas/dallas-star.jpeg'
import { NavLink } from 'react-router-dom'

function Home() {

    return(
        <>
            
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