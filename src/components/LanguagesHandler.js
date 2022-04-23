import { useTranslation } from 'react-i18next'
import style from '../css/languagesHandler.module.scss';

const LanguagesHandler = () => {

    const {t, i18n} = useTranslation();


    const handleClick = (lang, e) => {

        i18n.changeLanguage(lang);
    }

    return(
        <>
            <h3 className={style.languagesTitle}>{t('Settings.chooseLanguage')}</h3>
            <div className={style.languagesItems}>
                <button className={`${style.languagesItem} ${style.languagesItemFirst}`} onClick={e => handleClick('pl', e)}>PL</button>
                <button className={style.languagesItem} onClick={e => handleClick('en', e)} >EN</button>
            </div>

        </>
    )
}

export default LanguagesHandler;