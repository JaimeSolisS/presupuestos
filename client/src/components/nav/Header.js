import React, {useState} from 'react'
import styled from 'styled-components'
import { Menu, Badge} from 'antd';
import { HomeOutlined , UserOutlined, SettingOutlined, UserAddOutlined, LogoutOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import {Link}  from 'react-router-dom'

import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { getCategories } from "../../functions/category";
import { cartReducer } from '../../reducers/cartReducer';

const {SubMenu, Item} = Menu; //Menu.SubMenu, Menu.Item

    const StyledItem = styled(Menu.Item)`
        float: right
  `;

const Header = () => {

    const [current, setCurrent] = useState('home')

    const [loading, setLoading] = useState(false);


    let dispatch = useDispatch();
    let {user, cart} = useSelector((state) => ({...state}));
    let admin = false;
    if(user){
        if(user.role == "customer"){
            admin = false;
        }else if (user.role == "admin"){
            admin = true;
        }
    }

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
               {user && user.role === 'customer' && (
                   <Item>
                       <Link to='/user/history'>Historial</Link>
                   </Item>
               )}
               {user && user.role === 'admin' && (
                   <Item>
                       <Link to='/admin/dashboard'>Dashboard</Link>
                   </Item>
               )}
               <Item icon={<LogoutOutlined/>} onClick={logout}>Logout</Item>
           </SubMenu>
        )
        }
        
        <Item key="cart" icon={<ShoppingCartOutlined />} className="float-right">
            <Link to = "/cart">
                <Badge count={cart.length} offset={[9,0]}>
                    Carrito
                </Badge>
            </Link>
        </Item>
        
        <Item key="others" className="float-right">
            <Link to = "/Otros">Otros</Link>
        </Item>
        
        <Item key="paper" className="float-right">
            <Link to = "/Papeleria">Papeleria</Link>
        </Item>
        
        <Item key="printing" className="float-right">
            <Link to = "/Impresiones">Impresiones</Link>
        </Item>
        
        <Item key="ink" className="float-right">
            <Link to = "/Serigrafia">Serigrafía</Link>
        </Item>

        <Item key="clothing" className="float-right">
            <Link to = "/Ropa">Ropa</Link>
        </Item>
        
      </Menu>      
    )
}

export default Header