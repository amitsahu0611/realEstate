import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Navigation from './pages/Navigation'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
       <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/sign-in' Component={SignIn}></Route>
          <Route path='/sign-up' Component={SignOut}></Route>
          <Route path='/profile' Component={Profile}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App