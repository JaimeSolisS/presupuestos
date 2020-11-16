import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5)
    let history = useHistory()

    useEffect(() => {

        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount); //decrement 
        }, 1000)
        //redirect when count=0
        count===0 && history.push('/') //a home
        // cleanup
        return () => clearInterval(interval)
    }, [count])

    return (
        <div>
            <p>Te redirigiremos en {count} segundos</p>
        </div>
    )
};

export default LoadingToRedirect;