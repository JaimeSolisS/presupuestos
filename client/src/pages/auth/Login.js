import { Button } from 'antd';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrUpdateUser} from "../../functions/auth"
import {StyledContainer, StyledDivRow, StyledInputFormControl, 
    StyledDivFormGroup, StyledDivColOffSet, StyledMailButton} from '../../styled'

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

     const roleBasedRedirect = (response) => {
        if (response.data.role === 'admin') {
            history.push("/admin/dashboard"); // todavía no está pero podría ser una opción
        } else {
            history.push('/user/history');  //TEST
        }
    }


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
        .then((response) => {
            dispatch({
                type: 'LOGGED_IN_USER', 
                payload: {
                  name: response.data.name,
                  email: user.email, 
                  token: idTokenResult.token, 
                  role: response.data.role,
                  _id: response.data.id,
                },
              });
              roleBasedRedirect(response) 
        })
        .catch(error => console.log(error));
        //history.push('/')
        
        } catch (error){
            //console.log(error)
            toast.error(error.message)
            setLoading(false);
        }
        };
  
    const loginForm = () => (
        <form onSubmit={handleSubmit}>

        <StyledDivFormGroup>
            <StyledInputFormControl 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder= "Correo"
            autoFocus/>
        </StyledDivFormGroup>

        <StyledDivFormGroup>
            <StyledInputFormControl
             type="password" 
             value={password} 
             onChange={e => setPassword(e.target.value)}
             placeholder='Contraseña'
            />
        </StyledDivFormGroup>

       <br/>

        <StyledMailButton 
        onClick={handleSubmit} 
        disabled={!email || password.length < 6}>
            ENTRAR
        </StyledMailButton>

        <Link to= "forgot/password" className="float-right text-danger">¿Olvidaste tu Contraseña?</Link>
       
    </form>
);
     return (
        <StyledContainer>
           <StyledDivRow>
            <StyledDivColOffSet>
                {loading ? (<h4 className="text-danger">Espere...</h4>) :
                (<h4>Iniciar Sesión</h4>)}
                    {loginForm()}           
                </StyledDivColOffSet>
           </StyledDivRow>
        </StyledContainer>
     )
 }

 export default Login;