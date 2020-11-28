import React, {useState} from 'react'
import styled from 'styled-components'
import { Menu} from 'antd';
import { HomeOutlined , UserOutlined, SettingOutlined, UserAddOutlined, LogoutOutlined, ShoppingCartOutlined, SearchOutlined} from '@ant-design/icons';
import {Link}  from 'react-router-dom'

import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const {SubMenu, Item} = Menu; //Menu.SubMenu, Menu.Item

    const StyledItem = styled(Menu.Item)`
        float: right
  `;

const Header = () => {

    const [current, setCurrent] = useState('home')

    let dispatch = useDispatch();
    let {user} = useSelector((state) => ({...state}));


    let history = useHistory();

    const handleClick = (e) => {
        //console.log(e.key)
        setCurrent(e.key)
    }

    const logout = () =>{
        firebase.auth().signOut()
        dispatch({
            type: "LOGOUT",
            payload: null
        });
        history.push('/');

    };
    

    //cambiar a mostrar el nombre y no el correo 
    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined />}>
            <Link to = "/">Inicio</Link>
        </Item>

        {!user && (
              <Item key="register" icon={<UserAddOutlined />} className="float-right">
              <Link to = "/register">Registrarse</Link>
              </Item>
        )}

        {!user && (
             <Item key="login" icon={<UserOutlined />} className="float-right">
             <Link to = "/login">Iniciar sesión</Link>
             </Item>

        )}

        {user && (
               <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email && user.email.split("@")[0]} className="float-right"> 
               <Item key="setting:1">Option 1</Item>
               <Item key="setting:2">Option 2</Item>
               <Item icon={<LogoutOutlined/>} onClick={logout}>Logout</Item>
           </SubMenu>
        )
        }
        
        <Item key="presupuestos" icon={<ShoppingCartOutlined />} className="float-right">
            <Link to = "/">Presupuestos</Link>
        </Item>

        <Item key="others" className="float-right">
            <Link to = "/">Otros</Link>
        </Item>
        
        <Item key="paper" className="float-right">
            <Link to = "/">Papeleria</Link>
        </Item>
        
        <Item key="printing" className="float-right">
            <Link to = "/">Impresiones</Link>
        </Item>
        
        <Item key="ink" className="float-right">
            <Link to = "/">Serigrafía</Link>
        </Item>

        <Item key="clothing" className="float-right">
            <Link to = "/">Ropa</Link>
        </Item>
        
        <Item key="newProduct" className="float-right">
            <Link to = "/NewProduct">Agregar Producto</Link>
        </Item>
        
      </Menu>      
    )
}

export default Header