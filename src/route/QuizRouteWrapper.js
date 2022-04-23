import style from '../css/quizRouteWrapper.module.scss'
import { Outlet, Link, useLocation  } from 'react-router-dom'
import styleGlobal from '../css/globalHeaderStyle.module.scss';
import GlobalReturnToMenu from '../components/global/GlobalReturnToMenu'
import {Helmet} from "react-helmet";

const QuizRouteWrapper = () => {
    const location = useLocation().pathname.split('/')[1].toUpperCase();
    const metaTitleLanguage = location.toLowerCase().replace(location.toLocaleLowerCase().charAt(0), location.charAt(0).toUpperCase())

    return(
        <>
            <Helmet>
                <title>Quiz - {metaTitleLanguage}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={styleGlobal.gameTitleWrapper}>
                <h1  className={styleGlobal.gameTitle}>Wybrałeś <span className={style.titleLanguage}>{location}</span>! Wybierz poziom ciężkości:</h1>
            </div>
            <div className={styleGlobal.container}>
                <nav className={styleGlobal.mainNav}>
                    <div className={styleGlobal.firstNav}>
                        <Link className={style.levelsItem} to="easy">
                            <div className={style.levelsItemTitle}>
                                Łatwy
                            </div>
                        </Link>

                        <Link className={style.levelsItem} to="hard">
                            <div className={style.levelsItemTitle}>
                                Cieżki

                            </div>
                        </Link>
                        < GlobalReturnToMenu/>

                    </div>
                </nav>
            </div>

        </>

    )
}

export default QuizRouteWrapper;