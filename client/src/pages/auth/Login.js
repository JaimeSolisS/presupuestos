import { Button } from 'antd';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

const createOrUpdateUser = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/create-or-update-user`, {}, {
        headers: {
            authtoken: authtoken, 
        }
    })
}
 const Login = ({history}) => {  
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [loading, setLoading] = useState(false);

     const {user} = useSelector(state => ({...state}));

     useEffect(() =>{
        if(user && user.token) 
            history.push('/')
    }, [user])

     let dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault(); 
        //console.table(email, password)
        setLoading(true); 
        try {
        const result = await auth.signInWithEmailAndPassword(email, password); 
        //console.log(result)
        const {user} = result
        const idTokenResult = await user.getIdTokenResult()

        createOrUpdateUser(idTokenResult.token)
        .then((response) => console.log("Create or update response", response))
        .catch();
        /* for now
        dispatch({
            type: 'LOGGED_IN_USER', 
            payload: {
              email: user.email, //se puede agregar más info después
              token: idTokenResult.token, 
            },
          });
          history.push('/')
          */
        } catch (error){
            //console.log(error)
            toast.error(error.message)
            setLoading(false);
        }
        };
  
    const loginForm = () => (<form onSubmit={handleSubmit}>
        <input type="email" 
        className= "form-control" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        autoFocus
        />

        <input type="password" 
        className= "form-control" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit} type="submit" className="btn btn-raised" disabled={!email || password.length < 6}>
            ENTRAR
        </button>

        <Link to= "forgot/password" className="float-right text-danger">¿Olvidaste tu Contraseña?</Link>
       
    </form>
);
     return (
       
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <h4>Iniciar Sesión</h4>
       
                    
                    {loginForm()}

                </div>

            </div>

        </div>
     )
 }

 export default Login;