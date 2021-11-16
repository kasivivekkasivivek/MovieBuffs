import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import Main from "./main";
import LoginPage from './components/LoginPage';
import SignUP from './components/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/signup" component={SignUP}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
        
    );
}

export default App;
