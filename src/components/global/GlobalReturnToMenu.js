import {Link} from 'react-router-dom';
import style from '../../css/globalReturnToMenu.module.scss'
import { useTranslation } from 'react-i18next'


const GlobalReturnToMenu = () => {
    const {t, i18n} = useTranslation();

    return(
        <Link className={style.returnButton} to="/">{t('GlobalReturnToMenu.title')}</Link>
    )
}

export default GlobalReturnToMenu;