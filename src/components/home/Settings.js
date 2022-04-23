import {Link} from 'react-router-dom';
import styleGlobal from '../../css/globalHeaderStyle.module.scss';
import style from '../../css/settings.module.scss';
import GlobalReturnToMenu from '../global/GlobalReturnToMenu';
import LanguagesHandler from '../LanguagesHandler'
import { useTranslation } from 'react-i18next'
import {Helmet} from "react-helmet";

const Settings = () => {

    const {t, i18n} = useTranslation();


    return(
        <>
            <Helmet>
                <title>Quiz - {t('Settings.metaTitle')}</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={styleGlobal.gameTitleWrapper}>
                <h1 className={styleGlobal.gameTitle}>{t('Settings.title')}</h1>
            </div>
            <div className={styleGlobal.container}>
                <div className={styleGlobal.mainNav}>
                    <div className={style.options}>
                        <div className={style.languageOption}>
                            <LanguagesHandler />

                        </div>

                        < GlobalReturnToMenu/>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Settings;