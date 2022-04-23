import {Link} from 'react-router-dom';
import styleGlobal from '../../css/globalHeaderStyle.module.scss';
import GlobalReturnToMenu from '../global/GlobalReturnToMenu'
import style from '../../css/contact.module.scss'
import LoadingScreen from '../LoadingScreen'

const Contact = () => {

    return(
        <>
            <div className={styleGlobal.gameTitleWrapper}>
                <h1  className={styleGlobal.gameTitle}>Kontakt</h1>
            </div>
            <div className={styleGlobal.container}>
                <div className={styleGlobal.mainNav}>
                    <div className={style.firstNav}>

                        < GlobalReturnToMenu/>
                    </div>

                </div>
            </div>
            <div>
            </div>
        </>

    )
}

export default Contact;