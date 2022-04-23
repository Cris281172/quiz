import style from '../../css/chooseGameCategory.module.scss'
import {Link} from 'react-router-dom'
import {useRef} from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs } from "react-icons/si";
const ChooseGameCategory = ({setCategoriesVisible, testtt}) => {



    return(
        // <div className={style.gamesCategories}>
        //     <h2 className={style.gamesCategoriesTitle}>Wybierz kategorię w której chcesz zagrać:</h2>
        //     <ul ref={testtt} className={style.navItems}>
        //         <Link className={style.linkInformations} to="css">
        //
        //             <li className={style.navItem}>
        //                 <div className={style.itemLink} >
        //                     <div className={style.itemInformations}>
        //                         <div className={style.itemInformationsWrapper}>
        //                             <SiHtml5 className={style.itemInformationIcon} />
        //                             <h3 className={style.titleInformations}>HTML</h3>
        //                         </div>
        //
        //                     </div>
        //                 </div>
        //             </li>
        //         </Link>
        //
        //         <Link className={style.linkInformations} to="css">
        //
        //             <li className={style.navItem}>
        //                 <div className={style.itemLink} >
        //                     <div className={style.itemInformations}>
        //
        //                         <div className={style.itemInformationsWrapper}>
        //
        //                                 <SiCss3 className={style.itemInformationIcon} />
        //                                 <h3 className={style.titleInformations}>CSS</h3>
        //
        //                         </div>
        //
        //                     </div>
        //                 </div>
        //             </li>
        //         </Link>
        //
        //         <li className={style.navItem}>
        //             <div className={style.itemLink} >
        //                 <div className={style.itemInformations}>
        //                     <div className={style.itemInformationsWrapper}>
        //                         <SiJavascript className={style.itemInformationIcon} />
        //                         <h3 className={style.titleInformations}>Javascript</h3>
        //                     </div>
        //                     <Link className={style.linkInformations} to="javascript">
        //                         <button className={style.buttonInformations}>Wybierz poziom trudności</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className={style.navItem}>
        //             <div className={style.itemLink} >
        //                 <div className={style.itemInformations}>
        //                     <div className={style.itemInformationsWrapper}>
        //                         <SiReact className={style.itemInformationIcon} />
        //                         <h3 className={style.titleInformations}>React</h3>
        //                     </div>
        //                     <Link className={style.linkInformations} to="react">
        //                         <button className={style.buttonInformations}>Wybierz poziom trudności</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className={style.navItem}>
        //             <div className={style.itemLink} >
        //                 <div className={style.itemInformations}>
        //                     <div className={style.itemInformationsWrapper}>
        //                         <SiVuedotjs className={style.itemInformationIcon} />
        //                         <h3 className={style.titleInformations}>Vue</h3>
        //                     </div>
        //                     <Link className={style.linkInformations} to="vue">
        //                         <button className={style.buttonInformations}>Wybierz poziom trudności</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </li>
        //
        //
        //     </ul>
        // </div>
        <div className={style.gameCategory}>
            <ul className={style.gameList} ref={testtt}>
                <Link className={style.itemLink} to="html">
                    <li className={style.item}>
                        <SiHtml5 className={style.itemIcon} />
                        <h3 className={style.itemTitle}>HTML</h3>
                    </li>
                </Link>
                <Link className={style.itemLink} to="css">
                    <li className={style.item}>
                        <SiCss3 className={style.itemIcon} />
                        <h3 className={style.itemTitle}>CSS</h3>
                    </li>
                </Link>
                <Link className={style.itemLink} to="javascript">
                    <li className={style.item}>
                        <SiJavascript className={style.itemIcon} />
                        <h3 className={style.itemTitle}>JS</h3>
                    </li>
                </Link>
                <Link className={style.itemLink} to="react">
                    <li className={style.item}>
                        <SiReact className={style.itemIcon} />
                        <h3 className={style.itemTitle}>REACT</h3>
                    </li>
                </Link>
                <Link className={style.itemLink} to="vue">
                    <li className={style.item}>
                        <SiVuedotjs className={style.itemIcon} />
                        <h3 className={style.itemTitle}>VUE</h3>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default ChooseGameCategory;