import { Routes, Route } from 'react-router-dom'
import Header from '../components/home/Header'
import Home from '../components/home/Home'
import QuizRouteWrapper from "./QuizRouteWrapper";
import Layout from '../components/Layout'
import NoMatch from "../components/NoMatch";
import QuizGame from '../components/game/QuizGame';
import HowToPlay from '../components/home/HowToPlay';
import Author from '../components/home/Author';
import Settings from '../components/home/Settings';
import Contact from '../components/home/Contact'


const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="how-to-play" element={<HowToPlay />} />
                <Route path="autor" element={<Author />} />
                <Route path="settings" element={<Settings />} />
                <Route path="contact" element={<Contact />} />
                <Route path="javascript" element={<QuizRouteWrapper />} />
                    {['javascript/easy', 'javascript/hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}
                <Route path="css" element={<QuizRouteWrapper />} />
                     {['css/easy',  'css/hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}
                <Route path="html" element={<QuizRouteWrapper />} />
                     {['html/easy',  'html/hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}
                <Route path="react" element={<QuizRouteWrapper />} />
                    {['react/easy',  'react/hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}
                <Route path="vue" element={<QuizRouteWrapper />} />
                    {['vue/easy',  'vue/hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}
            </Route>
                {/*<Route path="html" element={<QuizRouteWrapper />}>*/}
                {/*    {['easy', 'medium', 'hard'].map((el, index) => <Route path={el} key={index} element={<QuizGame />} />)}*/}
                {/*</Route>*/}
                {/*<Route path="css" element={<QuizRouteWrapper />} >*/}
                {/*    {['easy', 'medium', 'hard'].map((el, index) => <Route key={index} path={el} element={<QuizGame />} />)}*/}
                {/*</Route>*/}
                <Route path="*" element={<NoMatch />} />

        </Routes>
    )
}

export default RoutesWrapper;