import { Outlet } from 'react-router-dom'
import {connect} from "react-redux";
import style from "../css/home/home.module.scss";


const Layout = ({footerStatus, footer}) => {

    console.log(footer)
    return(
        <div className={style.homeBackground}>

             <Outlet />
            {/*{footerStatus && <Footer />}*/}
        </div>


    )
}

const mapStateToProps = (state) => ({
    footer: state.footer,
})

export default connect(mapStateToProps)(Layout);
