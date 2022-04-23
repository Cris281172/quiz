import style from '../../css/informationSection.module.scss';


const InformationSection = ({currentQuestionNumber, questions, questionsPriceValue}) => {
    return(
        <div className={style.questionInformations}>
            <h2 className={style.questionInformationsTitle}>Informacje</h2>
            <h3 className={style.questionStat}>Pytanie: <span className={style.questionStatNumber}>{currentQuestionNumber}/{questions.questionsPrice.length}</span></h3>
            <h3 className={style.questionStat}>Grasz o: <span className={style.questionStatNumber}>{questions.questionsPrice[questionsPriceValue]}$</span></h3>
            <h3 className={style.questionStat}>Aktualnie posiadasz: <span className={style.questionStatNumber}>{(questions.questionsPrice[questionsPriceValue - 1] === undefined) ? 0 : questions.questionsPrice[questionsPriceValue - 1]}$</span></h3>
        </div>
    )
}

export default InformationSection;