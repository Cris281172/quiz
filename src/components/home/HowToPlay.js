import {Link} from 'react-router-dom';
import style from '../../css/globalHeaderStyle.module.scss';
import GlobalReturnToMenu from '../global/GlobalReturnToMenu'


const HowToPlay = () => {

    return(
        <>
            <div className={style.gameTitleWrapper}>
                <h1  className={style.gameTitle}>Jak grać?</h1>
            </div>
            <div className={style.container}>
                <nav className={style.mainNav}>
                    <ul className={style.firstNav}>
                        < GlobalReturnToMenu/>

                    </ul>

                </nav>

            </div>


        </>

    )
}

export default HowToPlay;