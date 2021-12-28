import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";


export const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>

            </div>
        </div>
        </BrowserRouter>
    );
}


