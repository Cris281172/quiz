import {useState} from 'react';
import style from '../../css/quizGame.module.scss';

const CallAFriend = ({setCueValue, setAlertWindowVisible, currentQuestion, setAnswerCueDescription}) => {
    const[callAFriendCue, setCallAFriendCue] = useState(true);
    const[fiftyByFiftyCue, setFiftyByFiftyCue] = useState(true);
    const[audienceQuestionCue, setAudienceQuestionCue] = useState(true);
    const answers = [currentQuestion.a, currentQuestion.b, currentQuestion.c, currentQuestion.d];



    const callAFriend = e => {
        const cue = [false, true, true, true];
        const randomCue = cue[Math.floor(Math.random() * cue.length )]
        if(callAFriendCue){
            setCueValue(true);
            setCallAFriendCue(false)
            e.target.classList.add(`${style.used}`)

            if(randomCue){
                console.log(answers[answers.indexOf(currentQuestion.correctAnswer)])
                setAnswerCueDescription(answers[answers.indexOf(currentQuestion.correctAnswer)])
            }
            else {
                const badCue = answers.filter(el => {
                    return el !== currentQuestion.correctAnswer
                })
                setAnswerCueDescription(badCue[Math.floor(Math.random() * badCue.length)])

            }
        }
        else{
            setAlertWindowVisible(true);
            setTimeout(() => {
                setAlertWindowVisible(false);
            }, 3000);
        }

    }


    return(
        <button  className={style.lifeBuoysItemButton} onClick={callAFriend}>Telefon do przyjaciela</button>
    )
}

export default CallAFriend;