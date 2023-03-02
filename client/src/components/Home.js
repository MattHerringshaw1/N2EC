
import lubbockStar from '../images/lubbock/lubbock-star.jpeg'
import dallasStar from '../images/dallas/dallas-star.jpeg'

function Home() {

    return(
        <>
            
            <div>
                <div>
                    
                    <img src={lubbockStar} alt="" ></img>
                </div>
                <div>
                    
                    <img src={dallasStar} alt="" ></img>
                </div>
            </div>
        </>
    )
}

export default Home