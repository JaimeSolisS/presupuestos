import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
border: none;
width: 100%;
height: 100%;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
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
const ItemButton = (props) => {
    const {image, name} = props;
    return (
        <StyledButton>
            <div>
            <StyledImage src={image}></StyledImage>
            </div>
            
            <p>{name}</p>
        </StyledButton>
    );
}
export default ItemButton;