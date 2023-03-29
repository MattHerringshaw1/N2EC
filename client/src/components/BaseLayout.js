import Footer from "./Footer";
import Menu from "./Menu";

function BaseLayout(props) {

    return(
        <>
        <div>
            <Menu />
            {props.children}
            <Footer />
        </div>
       
        </>
    )
}

export default BaseLayout