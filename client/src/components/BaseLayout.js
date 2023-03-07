import Footer from "./Footer";
import Menu from "./Menu";


function BaseLayout(props) {


    return(
        <>
            <Menu />
            {props.children}
            <Footer />
        </>
    )
}

export default BaseLayout