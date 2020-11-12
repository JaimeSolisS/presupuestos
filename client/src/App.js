import logo from './logo.svg';
import './App.css';
import React from "react";
import {Switch, Route} from "react-router-dom"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import {createStore} from 'redux'
//import {Provider} from 'react-redux'
//import {composeWithDevTools} from 'redux-devtools-extension'

import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import  Header  from './components/nav/Header'
import RegisterComplete from './pages/auth/RegisterComplete'

const App = () => {

  return (
    <>
    <Header/>
    <ToastContainer/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
    </Switch>
  </>
  )
}

export default App;
