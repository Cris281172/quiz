import {connect} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import CallAFriend from './CallAFriend';
import FiftyByFifty from './FiftyByFifty'
import LifeBuoysDescription from '../LifeBuoysDescription';
import AlertWindow from '../alerts/AlertWindow';
import style from '../../css/quizGame.module.scss';
import LoseGameAlertWindow from '../alerts/LoseGameAlertWindow';
import SurrenderGameAlertWindow from '../alerts/SurrenderGameAlertWindow';
import styleGlobal from '../../css/globalHeaderStyle.module.scss'
import { useTranslation } from 'react-i18next'
import InformationSection from './InformationSection'
import {addBalance} from '../../redux/actions/balanceAction';
import WinGame from './WinGame'
import {Helmet} from "react-helmet";


const QuizGame = ({questions, add}) => {
    console.log(add);
    const[currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const[visibleSurrenderAlert, setVisibleSurrenderAlert] = useState(false);
    const location = useLocation().pathname.split('/');
    const currentQuestionLevel = location[location.length - 1];
    const currentQuestionCategory = location[location.length - 2];
    const[answerCueDescription, setAnswerCueDescription] = useState('');
    let categoryQuestions = questions.questions.pl[currentQuestionCategory][currentQuestionLevel];
    const[gameStatus, setGameStatus] = useState(true);
    const[visibleButton, setVisibleButton] = useState(false);
    const[currentQuestion, setCurrentQuestion] = useState({});
    const[cueValue, setCueValue] = useState(false);
    const[questionsPriceValue, setQuestionsPriceValue] = useState(0)
    const[alertWindowVisible, setAlertWindowVisible] = useState(false);
    const[qusetionStatus, setQuestionStatus] = useState(true);
    const[winGameStatus, setWinGameStatus] = useState(false);
    const[balance, setBalance] = useState(questions.balance);
    const {t, i18n} = useTranslation();

    categoryQuestions = questions.questions[i18n.language][currentQuestionCategory][currentQuestionLevel];

    console.log(currentQuestion)
    const chooseAnswer = el => {
        setCueValue(false);
            if (el.target.innerText !== '') {
                if (qusetionStatus) {
                    if (el.target.innerText === currentQuestion.correctAnswer && gameStatus) {
                        el.target.classList.add(`${style.unknownAnswer}`);
                        setQuestionStatus(false);
                        setTimeout(() => {
                            el.target.classList.add(`${style.correctAnswer}`);
                            setTimeout(() => {
                                el.target.classList.remove(`${style.correctAnswer}`, `${style.unknownAnswer}`);
                                setCurrentQuestionNumber(prevState => prevState + 1);
                                setQuestionsPriceValue(prevState => prevState + 1);
                                setQuestionStatus(true);
                            }, 2000)
                        }, 2000)

                    } else {
                        el.target.classList.add(`${style.unknownAnswer}`);
                        setQuestionStatus(false);
                        setTimeout(() => {
                            add((questions.questionsPrice[questionsPriceValue - 1] === undefined) ? 0 : questions.questionsPrice[questionsPriceValue - 1]);
                            setVisibleButton(true);
                            setGameStatus(false);
                            setQuestionStatus(true);
                            el.target.classList.add(`${style.unCorrectAnswer}`);

                        }, 2000)

                    }
                }
            }

    }

    useEffect(() => {
        if(currentQuestionNumber !== 10) {
            const randomQuestion = Math.floor(Math.random() * categoryQuestions[currentQuestionNumber].length);
            setCueValue(false);
            const question = categoryQuestions[currentQuestionNumber][randomQuestion];
            console.log(question);
            const questions = [question.a, question.b, question.c, question.d];
            for(let i = 0; i < 50; i++) {
                questions.sort(() => Math.random() - 0.5);
            }
            ['a', 'b', 'c', 'd'].forEach((el, index) => {
                question[el] = questions[index];
            })
            setCurrentQuestion(question)
        }
        else {
            setWinGameStatus(true);
        }
    }, [currentQuestionNumber])

    return(


    <>
        <Helmet>
            <title>Quiz - {location[1].replace(location[1].charAt(0), location[1].charAt(0).toUpperCase())} - {location[2].replace(location[2].charAt(0), location[2].charAt(0).toUpperCase())}</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
        <div className={styleGlobal.gameTitleWrapper}>
            <h1  className={styleGlobal.gameTitle}>{location[1].toUpperCase()} {location[2].toUpperCase()}</h1>
        </div>
        <div className={styleGlobal.container}>
            <div className={styleGlobal.mainNav}>
                <div className={style.firstNav}>
                    <div className={style.questionInformation}>
                        <InformationSection currentQuestionNumber={currentQuestionNumber} questions={questions} questionsPriceValue={questionsPriceValue} />
                        <div className={style.lifeBuoysWrapper}>
                            <h2 className={style.lifeBuoyTitle}>Koła ratunkowe</h2>
                            <ul className={style.lifeBuoyItems}>
                                <li className={style.lifeBuoysItem}>
                                    <FiftyByFifty setAlertWindowVisible={setAlertWindowVisible} currentQuestion={currentQuestion} setAnswerCueDescription={setAnswerCueDescription} setCurrentQuestion={setCurrentQuestion} />
                                </li>
                                <li className={style.lifeBuoysItem}>
                                    <CallAFriend setCueValue={setCueValue} setAlertWindowVisible={setAlertWindowVisible} currentQuestion={currentQuestion} setAnswerCueDescription={setAnswerCueDescription} setCurrentQuestion={setCurrentQuestion} />
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={style.questionWrapper}>
                        <h3 className={style.questionTitle}>{currentQuestion.question}</h3>
                        <p className={style.questionDescription}>{currentQuestion.questionDescription}</p>
                        <ul className={style.answersWrapper}>
                            <li className={style.answer} onClick={chooseAnswer}>{currentQuestion.a}</li>
                            <li className={style.answer} onClick={chooseAnswer}>{currentQuestion.b}</li>
                            <li className={style.answer} onClick={chooseAnswer}>{currentQuestion.c}</li>
                            <li className={style.answer} onClick={chooseAnswer}>{currentQuestion.d}</li>
                        </ul>
                    </div>
                    {cueValue && <LifeBuoysDescription answerCueDescription={answerCueDescription}/>}

                </div>

            </div>

        </div>
        <button className={style.returnButton} onClick={() => {
            setVisibleSurrenderAlert(true);
            add((questions.questionsPrice[questionsPriceValue - 1] === undefined) ? 0 : questions.questionsPrice[questionsPriceValue - 1]);
        }}>Wycofaj się z gry</button>
        {visibleSurrenderAlert && <SurrenderGameAlertWindow currentQuestionCategory={currentQuestionCategory} questions={questions} questionsPriceValue={questionsPriceValue} />}
        {visibleButton && <LoseGameAlertWindow currentQuestionCategory={currentQuestionCategory} questions={questions} questionsPriceValue={questionsPriceValue} />}
        {winGameStatus && <WinGame />}
        {alertWindowVisible && <AlertWindow />}

    </>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions,
})

const mapDispatchToProps = dispatch => ({
    add: value => dispatch(addBalance(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuizGame);
