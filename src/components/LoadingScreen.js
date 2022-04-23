import style from '../css/loadingScreen.module.scss'
import {Helmet} from "react-helmet";

const LoadingScreen = () => {
    return(
        <>
            <Helmet>
                <title>Loading</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.ringBackground}>
                <div className={style.ring}>Loading
                    <span className={style.ringElement}></span>
                </div>
            </div>
        </>



    )
}

export default LoadingScreen;