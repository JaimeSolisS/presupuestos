import React, {useState}from 'react'
import UserNav from '../../components/nav/UserNav'
import {auth} from '../../firebase'
import {toast} from 'react-toastify'

const Password = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(password) 
        setLoading(true)

        await auth.currentUser.updatePassword(password)
        .then(() => {
            setLoading(false)
            setPassword('')
            toast.info('Contraseña actualizada')
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
    } 

    const passwordUpdateForm = () => (
        <form onSubmit= {handleSubmit}>
            <div>
                <label>Contraseña nueva</label>
                <input type='password' onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <button disabled={!password || password.length < 6  || loading}>Acceptar</button>
        </form>


    )

    return (
        <div>
            <UserNav/>
            {loading ? (<h4>Espera</h4>) : ( <h4>Cambiar contraseña</h4>)}
            {passwordUpdateForm()}
        </div>
    
    )
}


export default Password;

