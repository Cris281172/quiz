import style from '../../css/surrenderGameAlertWindow.module.scss'
import {Link} from 'react-router-dom';

const SurrenderGameAlertWindow = ({currentQuestionCategory, questions, questionsPriceValue}) => {
    
    return(
        <div className={style.alertWindow}>
            <div className={style.alertWindowWrapper}>
                <h4 className={style.alertLoseInformation}>Wycofałeś się z gry i zdobyłeś {(questions.questionsPrice[questionsPriceValue - 1] === undefined) ? 0 : questions.questionsPrice[questionsPriceValue - 1]}$. Aby zagrać ponownie: </h4>
                <Link className={style.alertBackToMenu} to={`/${currentQuestionCategory}`}>Wróć do menu</Link>
            </div>
        </div>)
}

export default  SurrenderGameAlertWindow;