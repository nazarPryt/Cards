import React from 'react'

import Page404 from '../feature/404/Page404'
import LogIn from '../feature/login/LogIn'
// import {Route, Routes} from 'react-router-dom';
// import Home from "../feature/home/Home";

// import Page404 from "../feature/404/Page404";
// import PasswordRecovery from "../feature/passwordRecovery/PasswordRecovery";
// import Registration from "../feature/registration/Registration";
// import Profile from "../feature/profile/Profile";
// import TestBed from "../feature/testBed/TestBed";
// import EnterNewPassword from "../feature/enterNewPassword/EnterNewPassword";
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
      <Page404 />
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
