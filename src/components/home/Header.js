import {Outlet, Link} from 'react-router-dom';
import {useState, useRef} from 'react';
import { FaAngleRight, FaGamepad } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import style from '../../css/header.module.scss'
import ChooseGameCategory from '../game/ChooseGameCategory'
import { BsPersonFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { useTranslation } from 'react-i18next'

const Header = () => {

    const[categoriesVisible, setCategoriesVisible] = useState(false);
    const testtt = useRef(null);
    const {t, i18n} = useTranslation();

    const showCategories = () => {
        setCategoriesVisible(true);
        setTimeout(() => {
            testtt.current.scrollIntoView({ behavior: 'smooth', block: 'start'})

        }, 1)

    }

    return(

        <div className={style.container}>
            <nav className={style.mainNav}>
                <ul className={style.firstNav}>
                    <li className={style.navElement}>
                        <Link className={style.title} to="how-to-play">{t('Header.links.1')} <FaGamepad className={style.titleIconHowToPlay} /></Link>
                    </li>
                    <li className={style.navElement}>

                        <Link className={style.title} to="autor">{t('Header.links.2')} <BsPersonFill className={style.titleIconAuthor} /></Link>
                    </li>
                    {/*<li className={style.navElement}>*/}
                    {/*    <Link className={style.title} to="settings">{t('Header.links.3')} <AiFillSetting className={style.titleIconSettings}/></Link>*/}
                    {/*</li>*/}
                    {/*<li className={style.navElement}>*/}
                    {/*    <Link className={style.title} to="contact">{t('Header.links.4')} <IoIosCall className={style.titleIconContact} /></Link>*/}
                    {/*</li>*/}
                    <li className={style.navElement}>
                        <div onClick={showCategories} className={style.title}>{t('Header.links.5')} <FaAngleRight className={style.titleIconPlay} /></div>
                    </li>
                </ul>
                <div className={style.secondNav}>
                    {categoriesVisible && <ChooseGameCategory  setCategoriesVisible={setCategoriesVisible} testtt={testtt}/>}

                </div>
            </nav>
        </div>



    )
}

export default Header;