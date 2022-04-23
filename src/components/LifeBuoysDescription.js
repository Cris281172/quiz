import style from '../css/lifeBuoysDescription.module.scss'

const LifeBuoysDescription = ({answerCueDescription}) => {
    return(
        <div className={style.lifeBuoysDescriptionWrapper}>
            <h3 className={style.lifeBuoysDescriptionTitle}>Przyjaciel: Według mnie prawidłową odpowiedzią będzie "{answerCueDescription}".</h3>
        </div>
    )
}

export default LifeBuoysDescription;