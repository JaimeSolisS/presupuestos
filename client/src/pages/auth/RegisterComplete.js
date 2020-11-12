import { Button } from 'antd';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'


 const RegisterComplete = (props) => {

  
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState('')
     //props.history
     
     useState(() => {
         setEmail(window.localStorage.getItem("emailForRegistration"))

     }, [])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
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