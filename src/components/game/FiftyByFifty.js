import {useState} from 'react';
import style from '../../css/quizGame.module.scss';

const FiftyByFifty = ({ setAlertWindowVisible, currentQuestion, setAnswerCueDescription, setCurrentQuestion}) => {
    const[callAFriendCue, setCallAFriendCue] = useState(true);
    const[fiftyByFiftyCue, setFiftyByFiftyCue] = useState(true);
    const[audienceQuestionCue, setAudienceQuestionCue] = useState(true);
    const answers = [currentQuestion.a, currentQuestion.b, currentQuestion.c, currentQuestion.d];


    const fiftyByFifty = e => {
        const cue = [false, true, true, true];
        const correctAnswerIndex = answers.indexOf(answers[answers.indexOf(currentQuestion.correctAnswer)]);

        const correctAnswer = answers.splice(correctAnswerIndex, 1);
        const randomUncorrectAnswer = answers[Math.floor(Math.random() * answers.length)];

        if(fiftyByFiftyCue){

            const obj = {...currentQuestion};

            for(let prop in obj){
                if(['a','b','c','d'].includes(prop) && obj[prop] !== correctAnswer[0] && obj[prop] !== randomUncorrectAnswer){
                    obj[prop] = null;
                }
            }

            setCurrentQuestion(obj)
            e.target.classList.add(`${style.used}`)
            setFiftyByFiftyCue(false);
        }
        else{
            setAlertWindowVisible(true);
            setTimeout(() => {
                setAlertWindowVisible(false);
            }, 3000);
        }
    }



    return(
        <button className={style.lifeBuoysItemButton} onClick={fiftyByFifty}>50/50</button>
    )
}

export default FiftyByFifty;