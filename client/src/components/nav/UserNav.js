import React from 'react'
import {Link} from 'react-router-dom'

const UserNav = () => (
    <nav>
        <ul>
            <li>
                <Link to='./history'>Historial</Link>
            </li>

            <li>
                <Link to='./password'>Contraseña</Link>
            </li>
        </ul>
    </nav>

)

export default UserNav