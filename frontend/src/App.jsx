import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import Carousel from './components/carousel/Carousel';
import FoodDetail from './components/foodDetail/FoodDetail';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from './Pages/MainPage';
import Reservation from './components/reservation/Reservation';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/LoginPage/RegisterPage';
import { UserContextProvider } from './context/UserContext';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <>
    <UserContextProvider>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/foodDetail/:id' element={<FoodDetail/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </UserContextProvider>
      
    </>
  )
}

export default App
