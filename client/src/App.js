import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
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
import ForgotPassword from './pages/auth/ForgotPassword'
import History from './pages/user/History'
import UserRoute from './components/routes/UserRoute'
import Password from './pages/user/Password'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminRoute from './components/routes/AdminRoute'

import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import {currentUser} from './functions/auth'


const App = () => {
  const dispatch = useDispatch()

  //check firebase auth state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
       // console.log("user", user)
       currentUser(idTokenResult.token)
                .then((response) => {
                    dispatch({
                        type: 'LOGGED_IN_USER', 
                        payload: {
                          name: response.data.name,
                          email: response.data.email, 
                          token: idTokenResult.token, 
                          role: response.data.role,
                          _id: response.data.id,
                        },
                      });
                })
                .catch(error => console.log(error));
      }
    });

    //cleanup
    return () => unsubscribe(); 

  }, [])

  return (
    <>
    <Header/>
    <ToastContainer/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
      <Route exact path="/forgot/password" component={ForgotPassword}/>
      <UserRoute exact path="/user/history" component={History}/>
      <UserRoute exact path="/user/password" component={Password}/>
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
    </Switch>
  </>
  )
}

export default App;
