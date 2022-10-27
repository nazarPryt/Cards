import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Page404 from "./pages/Page404";
import PasswordRecovery from "./pages/PasswordRecovery";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import TestBed from "./pages/TestBed";
import EnterNewPassword from "./pages/EnterNewPassword";
import { NavLink } from 'react-router-dom';

const PATH = {
    login: '/LogIn',
    page404: '*',
    profile: '/Profile',
    testBed: '/testBed',
    registration: '/registration',
    passwordRecovery: '/passwordRecovery',
    enterNewPassword: '/enterPassword',
    home: '/'
}

function App() {
    return (
        <div>
            <nav>
                <NavLink to={PATH.home}>Home</NavLink>
                <NavLink to={PATH.login}>Login</NavLink>
                <NavLink to={PATH.profile}>Profile</NavLink>
                <NavLink to={PATH.passwordRecovery}>PasswordRecovery</NavLink>
            </nav>
            <Routes>
                <Route path={PATH.home} element={<Home/>}/>
                <Route path={PATH.login} element={<LogIn/>}/>
                <Route path={PATH.page404} element={<Page404/>}/>
                <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
                <Route path={PATH.enterNewPassword} element={<EnterNewPassword/>}/>
                <Route path={PATH.registration} element={<Registration/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.testBed} element={<TestBed/>}/>
            </Routes>
        </div>
    );
}

export default App;
