import React, {useState, useEffect} from 'react'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import {StyledContainer, StyledDivRow, StyledDivColOffSet,
        StyledInputFormControl, StyledDivFormGroup, StyledRegisterButton} from '../../styled'


 const Register = ({history}) => {

     const [email, setEmail] = useState("");

     const {user} = useSelector(state => ({...state}));

     useEffect(() =>{
        if(user && user.token) 
            history.push('/')
    }, [user])


    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent browser reload
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };

        if (!email){
            toast.error("Email requerido");
            return;
        }

        await auth.sendSignInLinkToEmail(email, config);
        toast.info(
            `Correo enviado a ${email}. Da click en el enlace para continuar tu registro.`);
        
            //hay que guardar el email en local storage para que no tener que meter otro.
            window.localStorage.setItem('emailForRegistration', email)
            //clear state
            setEmail('');

        };
  
    const registerForm = () => (<form onSubmit={handleSubmit}>

        <StyledDivFormGroup>

       
        <StyledInputFormControl
        type="email"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        autoFocus
        placeholder='Correo'
        />
        </StyledDivFormGroup>

        
        <StyledRegisterButton type="submit">
            Registrarse
        </StyledRegisterButton>

       
    </form>
);
     return (
       
        <StyledContainer>
            <StyledDivRow>
                <StyledDivColOffSet>
                    <h4>Registrarse</h4>
                    {registerForm()}
                </StyledDivColOffSet>
            </StyledDivRow>
        </StyledContainer>
     )
 }

 export default Register;