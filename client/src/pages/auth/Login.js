import React, {useState, useEffect} from 'react'
import {auth, googleAuthProvider} from '../../firebase'
import {toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {createOrUpdateUser} from "../../functions/auth"
import {MailOutlined, GoogleOutlined} from "@ant-design/icons"
import {StyledContainer, StyledDivRow, StyledInputFormControl,
    StyledDivFormGroup, StyledDivColOffSet, StyledMailButton, StyledGoogleButton} from '../../styled'


 const Login = ({history}) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [loading, setLoading] = useState(false);

     const {user} = useSelector(state => ({...state}));

     useEffect(() => {
        let intended = history.location.state;
        if (intended) {
          return;
        } else {
          if (user && user.token) history.push("/");
        }
      }, [user, history]);

     let dispatch = useDispatch();

     const roleBasedRedirect = (response) => {
         let intended = history.location.state;
         if (intended) {
             history.push(intended.from);
         } else {
            if (response.data.role === 'admin') {
                history.push("/admin/dashboard");
            } else {
                history.push('/');  //TEST
            }
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
                  email: response.data.email,
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
            console.log(error)
            toast.error(error.message)
            setLoading(false);
        }
        };

        const googleLogin = async () => {
            auth
              .signInWithPopup(googleAuthProvider)
              .then(async (result) => {
                const { user } = result;
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                  .then((response) => {
                    dispatch({
                      type: "LOGGED_IN_USER",
                      payload: {
                        name: response.data.name,
                        email: response.data.email,
                        token: idTokenResult.token,
                        role: response.data.role,
                        _id: response.data._id,
                      },
                    });
                    roleBasedRedirect(response);
                  })
                  .catch((error) => console.log(error));
                // history.push("/");
              })
              .catch((error) => {
                console.log(error);
                toast.error(error.message);
              });
          };

    const loginForm = () => (
        <>
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
             <span><MailOutlined/> Entrar </span>
        </StyledMailButton>

        

    </form>
    <StyledGoogleButton
    onClick={googleLogin}>
        <span><GoogleOutlined/> Entrar con Google</span>
    </StyledGoogleButton>



    <Link to= "forgot/password" className="float-right text-danger">¿Olvidaste tu Contraseña?</Link>
    </>
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
