import React from 'react'

import LogIn from '../pages/login/LogIn'
// import {Route, Routes} from 'react-router-dom';
// import Home from "../pages/home/Home";

// import Page404 from "../pages/404/Page404";
// import PasswordRecovery from "../pages/passwordRecovery/PasswordRecovery";
// import Registration from "../pages/registration/Registration";
// import Profile from "../pages/profile/Profile";
// import TestBed from "../pages/testBed/TestBed";
// import EnterNewPassword from "../pages/enterNewPassword/EnterNewPassword";
// import { NavLink } from 'react-router-dom';

const PATH = {
    login: '/LogIn',
    page404: '*',
    profile: '/Profile',
    testBed: '/testBed',
    registration: '/registration',
    passwordRecovery: '/passwordRecovery',
    enterNewPassword: '/enterPassword',
    home: '/',
}

function App() {
    return (
        <LogIn />
        // <div>
        //     <nav>
        //         <NavLink to={PATH.home}>Home</NavLink>
        //         <NavLink to={PATH.login}>Login</NavLink>
        //         <NavLink to={PATH.profile}>Profile</NavLink>
        //         <NavLink to={PATH.passwordRecovery}>PasswordRecovery</NavLink>
        //     </nav>
        //     <Routes>
        //         <Route path={PATH.home} element={<Home/>}/>
        //         <Route path={PATH.login} element={<LogIn/>}/>
        //         <Route path={PATH.page404} element={<Page404/>}/>
        //         <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
        //         <Route path={PATH.enterNewPassword} element={<EnterNewPassword/>}/>
        //         <Route path={PATH.registration} element={<Registration/>}/>
        //         <Route path={PATH.profile} element={<Profile/>}/>
        //         <Route path={PATH.testBed} element={<TestBed/>}/>
        //     </Routes>
        // </div>
    )
}

export default App
