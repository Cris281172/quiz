import {Link} from 'react-router-dom'
import style from '../../css/loseGameAlertWindow.module.scss'


const LoseGameAlertWindow = ({currentQuestionCategory, questions, questionsPriceValue}) => {

    return(
        <div className={style.alertWindow}>
            <div className={style.alertWindowWrapper}>
                <h4 className={style.alertLoseInformation}>Zdobyłeś {(questions.questionsPrice[questionsPriceValue - 1] === undefined) ? 0 : questions.questionsPrice[questionsPriceValue - 1]}$. Aby zagrać ponownie: </h4>
                <Link className={style.alertBackToMenu} to={`/${currentQuestionCategory}`}>Wróć do menu</Link>
            </div>
        </div>
    )
}


export default LoseGameAlertWindow;