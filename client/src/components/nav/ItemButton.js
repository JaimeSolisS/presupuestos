import React, {useState} from 'react';
import styled from 'styled-components';
import {EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import {HorizontalDiv, Spacer} from '../../styled'
import {useSelector} from 'react-redux'
const StyledButton = styled.button `
border: none;
width: 100%;
height: 100%;
color: white;
padding: 10px 10px;
text-align: center !important;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
display: flex;
flex-direction: column;
transition-duration: 0.4s;
background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  &:hover {
    background-color: #e7e7e7;
  }

  &:disabled {
      box-shadow: none;
      opacity: 0.3;
`;

const StyledImage = styled.img `
width: 100%;
height: 100%;
`;

const StyledVisible = styled.button `
border: none;
color: white;
float: right !important;
margin: 4px 4px;
display: inline-block;
background-color: white;
  color: black;
  border: 2px solid #e7e7e7;

  &:hover {
    background-color: #e7e7e7;
  }

  &:disabled {
      box-shadow: none;
      opacity: 0.3;
`;

const ItemButton = (props) => {
    const {image, name} = props;
    let {user} = useSelector((state) => ({...state}));
    let admin = false;
    if(user){
        if(user.role == "customer"){
            admin = false;
        }else if (user.role == "admin"){
            admin = true;
        }
    }
    
    let [visible, setVisible] = useState(false)

    function toProduct(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    function hidden(e){
        e.preventDefault();
        e.stopPropagation();
        setVisible(!visible);
    }

    return (
        <StyledButton onClick={toProduct}>
            {admin && (
                <HorizontalDiv>
                    <StyledVisible onClick={hidden}>
                        {visible && (
                            <EyeOutlined/>
                        )}
                        {!visible && (
                            <EyeInvisibleOutlined/>
                        )}
                        
                    </StyledVisible>
                </HorizontalDiv>
            )}
            
        
            <Spacer></Spacer>
            
            <HorizontalDiv>
                <StyledImage src={image}></StyledImage>
            </HorizontalDiv>
            
            <Spacer></Spacer>
            <HorizontalDiv>
                <p>{name}</p>
            </HorizontalDiv>
            
        </StyledButton>
    );
}
export default ItemButton;