import { Button } from 'antd';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'


 const RegisterComplete = ({history}) => {

  
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState('')
     //props.history
     
     useEffect(() => {
         setEmail(window.localStorage.getItem("emailForRegistration"));
          // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));

     }, [])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        //validate
        if (!email || !password){
            toast.error("Email and password required");
            return;
        }

        if (password.length <6){
            toast.error("Password must be at least 6 characters long");
            return; 
        }

        try {
            const result = await auth.signInWithEmailLink(email, window.location.href)

            //console.log('Result:', result)
            if (result.user.emailVerified){
                //remover usuario de local storage
                window.localStorage.removeItem("emailForRegistration");
                //get id token del usuario
                let user = auth.currentUser;
                await user.updatePassword(password);
                const getIdTokenResult = await user.getIdTokenResult()
                //redux 
                //redirect
                history.push('/')

            }
        } catch (error){
            console.log(error)
            toast.error(error.message)
        }
        };
  
    const completeRegistrationForm = () => (
        <form onSubmit={handleSubmit}>
        <input type="email" className= "form-control" value={email} disabled />
        <input type="password" className= "form-control" value={password} onChange={e => setPassword(e.target.value)} 
        placeholder="Password"
        autoFocus
        />

        <br/>

        <button type="submit" className="btn btn-raised">
            Complete Registration
        </button>
       
    </form>
    );

     return (
       
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <h4>Register Complete</h4>
       
                    
                    {completeRegistrationForm()}

                </div>

            </div>

        </div>
     )
 }

 export default RegisterComplete;