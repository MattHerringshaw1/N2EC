import Footer from "./Footer";
// import ImgSlider from "./ImgSlider";
import Menu from "./Menu";

function BaseLayout(props) {

    return(
        <>
        <div>
            <Menu />
        
            {/* <ImgSlider /> */}
        
            {props.children}
            <Footer />
        </div>
       
        </>
    )
}

export default BaseLayout