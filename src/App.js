import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import RoutesWrapper from './route/RoutesWrapper'
import UserPopup from './components/UserPopup';

function App() {



  return (
    <div className="App" >
            <Provider store={store}>
                <BrowserRouter>
                    <RoutesWrapper />
                    <UserPopup />

                </BrowserRouter>
            </Provider>
    </div>
  );
}

export default App;

