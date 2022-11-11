import React from 'react'

import { Route, Routes, NavLink } from 'react-router-dom'

import Page404 from '../feature/404/Page404'
import Home from '../feature/home/Home'
import LogIn from '../feature/login/LogIn'
import Profile from '../feature/profile/Profile'
import TestBed from '../feature/testBed/TestBed'

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
      <div>
         <nav>
            <NavLink to={PATH.home}>Home</NavLink>
            <NavLink to={PATH.login}>Login</NavLink>
            <NavLink to={PATH.profile}>Profile</NavLink>
            <NavLink to={PATH.passwordRecovery}>PasswordRecovery</NavLink>
         </nav>
         <Routes>
            <Route path={PATH.home} element={<Home />} />
            <Route path={PATH.login} element={<LogIn />} />
            <Route path={PATH.page404} element={<Page404 />} />
            <Route path={PATH.profile} element={<Profile />} />
            <Route path={PATH.testBed} element={<TestBed />} />
         </Routes>
      </div>
   )
}

export default App
