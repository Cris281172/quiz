import Header from './Header';
import style from '../../css/home/home.module.scss';
import {Helmet} from "react-helmet";

const Home = () => {
    return(
        <>
            <Helmet>
                <title>Quiz - Programilonerzy</title>
                <meta name="description" content="Lorem ipsum dolor sit amet" />
            </Helmet>
            <div className={style.home}>
                <h1  className={style.homeTitle}>Programilonerzy</h1>
            </div>
            <Header />
        </>

    )
}

export default Home;