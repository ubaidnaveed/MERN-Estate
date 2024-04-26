import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'



export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<AboutUs />} />
        <Route element={<PrivateRoute />} >
        <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}
