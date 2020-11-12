import { Button } from 'antd';
import React, {useState} from 'react'
import styled from 'styled-components'
import {auth} from '../../firebase'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

 const Register = () => {

  
     const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent browser reload
        const config = {
            url: 'http://localhost:3000/register/complete',  //url a donde regresar
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, config);
        toast.info(
            `Correo enviado a ${email}. Da click en el enlace para finalizar tu registro.`);
        
            //hay que guardar el email en local storage para que no tener que meter otro.
            window.localStorage.setItem('emailForRegistration', email)
            //clear state
            setEmail('');

        };
  
    const registerForm = () => <form onSubmit={handleSubmit}>
        <input type="email" 
        className= "form-control" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        autoFocus
        />

        <button type="submit" className="btn btn-raised">
            Register
        </button>
       
    </form>

     return (
       
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <h4>Register</h4>
                    <ToastContainer  />
                    
                    {registerForm()}

                </div>

            </div>

        </div>
     )
 }

 export default Register;