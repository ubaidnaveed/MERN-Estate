import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>    
  )
}
