import {Link} from 'react-router-dom';
import styleGlobal from '../../css/globalHeaderStyle.module.scss';
import GlobalReturnToMenu from '../global/GlobalReturnToMenu'
import style from '../../css/autor.module.scss'
import {Helmet} from "react-helmet";

const Author = () => {

    return(
        <>
            <Helmet>
                <title>Autor</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={styleGlobal.gameTitleWrapper}>
                <h1  className={styleGlobal.gameTitle}>Autor</h1>
            </div>
            <div className={styleGlobal.container}>
                <div className={styleGlobal.mainNav}>
                    <div className={style.autorWrapper}>
                            <h3 className={style.autorTitle}>Krzysztof Juczyński - Frontend Developer</h3>
                            <p className={style.autorText}>Od grudnia 2020 zacząłem swoją przygodę z programowaniem, zaczynając od darmowych kursów z przeróżnych stron internetowych.
                                Następnym krokiem było wykupienie kursu Arkadiusza Włodarczyka "Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta".
                                Po zakończeniu tego kursu, czułem się zamieszany. Nie umiałem połączyć informacji, które były przekazane w tym kursie. Strasznie się zniechęciłem, lecz nie poddałem.
                                Następym kursem za, który postanowaiłem się zabrać był: "Web developer od podstaw w 15 dni", autora Samuraj Programowania.
                                Po ukończeniu tego kursu zacząłem łączyć ze sobą rzeczy i poczułem wiatr w żaglach. Postanowiłem więc nie przestawać i iść dalej.
                                Ostatnim kursem na tej platofmie, który ukończyłem był: "Front-end zaawansowany w 15 dni", tego samego autora co wyżej. Po tym kursie postanowiłem zacząć się uczyć na poważnie Javascript'u, lecz nie wiedział od czego zacząć.
                                Zacząłem szukać osoby, która mogłaby mi pomóc w nauce, tak abym się nie pogubił i tak trafiłem na Pana Michała Siwica (<a className={style.autorPageLink} href="https://viweb.pl/">Viweb.pl</a>). Od około lutego 2021, zaczeliśmy lekcje programowania z Javascript.
                                Bardzo mi się to podobało i chętnie słuchałem co mądrego ma do powiedzenia mój mentor. Po lekcja robiłem różne dodatkowe rzeczy tak, aby utrwalić wiedzę z lekcji.
                            </p>
                        < GlobalReturnToMenu/>

                    </div>

                </div>
            </div>

        </>

    )
}

export default Author;