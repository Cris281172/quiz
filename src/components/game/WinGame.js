import style from '../../css/winGame.module.scss';
import image from '../../images/win-animation-image.gif'
import image2 from '../../images/win-animation-image2.gif'
import image3 from '../../images/win-animation-image3.gif'
import image4 from '../../images/win-animation-image4.gif'
import image5 from '../../images/win-animation-image5.gif'
import image6 from '../../images/win-animation-image6.gif'
import GlobalReturnToMenu from "../global/GlobalReturnToMenu";

const WinGame = () => {
    const images = [image, image2, image3, image4, image5, image6]

    return(
        <div className={style.winBackground}>
            <h2 className={style.winTitle}>Gratulacje! Wygrałeś 1.000.000! Wydaje je dobrze :D</h2>
            <img src={images[Math.floor(Math.random() * images.length)]} />
            <GlobalReturnToMenu />
        </div>
    )
}

export default WinGame;