import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import {useSelector} from 'react-redux'

const ForgotPassword = ({ history }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const {user} = useSelector(state => ({...state}));

    useEffect(() =>{
        if(user && user.token) 
            history.push('/')
    }, [user])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      const config = {
        url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
        handleCodeInApp: true,
      };
  
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          setEmail("");
          setLoading(false);
          toast.info("Se ha enviado un link a tu correo para cambiar tu contraseña. Por favor revísalo");
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
          //console.log("ERROR MSG IN FORGOT PASSWORD", error);
        });
    };
  
    return (
      <div>
        {loading ? (<h4>Espera...</h4>): (<h4>¿Olvidaste tu Contraseña?</h4>)}
  
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <br />
          <button disabled={!email}>
            Recuperar
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;