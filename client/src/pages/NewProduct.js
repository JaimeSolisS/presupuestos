import React, {useState} from 'react'
import styled from "styled-components";
import {StyledContainer, StyledInputFormControl, HorizontalDiv, Spacer} from '../styled'
import AddImageButton from '../components/nav/AddImageButton'

  const Column = styled.div `
    flex: ${(props) => props.size};
    padding-right: ${(props) => props.paddingRight ? props.paddingRight : "0px" };
  `

  const Row = styled.div `
    display: flex;
    margin-bottom: 15px;
  `;

  const TextRight = styled.p `
    text-align: right;
    margin-top: 10px;
    padding-right: 15px;
  `;

  const AddProduct = styled.button `

  `


const NewProduct = () => {

  var producto = {};

  return (
    <StyledContainer>
      <Row>
        <Column size="2" paddingRight="5%">
          <Row>
            <StyledInputFormControl
              type="text"
              value={producto.nombre}
              placeholder= "Nombre del producto"
            ></StyledInputFormControl>
          </Row>
          <Row>
            <Column size="1">
              <TextRight>
                Categoría
              </TextRight>

            </Column>
            <Column size="1">
              <StyledInputFormControl
                type="text"
                value={producto.categoria}
                placeholder= "categoría"
              ></StyledInputFormControl>
            </Column>
          </Row>
          <Row>
            <Column size="1">
              <TextRight>
                Tipo
              </TextRight>

            </Column>
            <Column size="1">
              <StyledInputFormControl
                type="text"
                value={producto.tipo}
                placeholder= "tipo"
              ></StyledInputFormControl>
            </Column>
          </Row>
          <Row>
            <StyledInputFormControl
              type="text"
              value={producto.nombre}
              placeholder= "Descripcion"
            ></StyledInputFormControl>
          </Row>
          <Row>
            <Column size="1">
              <TextRight>
                Precio mínimo
              </TextRight>
            </Column>
            <Column size="1">
              <StyledInputFormControl
                type="text"
                value={producto.precioMin}
                placeholder= "tipo"
              ></StyledInputFormControl>
            </Column>
          </Row>
          <Row>
            <AddProduct/>
          </Row>

        </Column>

        <Column size="1">
          <AddImageButton name="Prueba" image="https://img.pngio.com/free-png-plus-sign-transparent-plus-signpng-images-pluspng-plus-sign-transparent-background-512_512.png"></AddImageButton>
          {/* <PictureOutlined style={{ width: '100%', height: '100%', backgroundColor: 'plum' }}/> */}
        </Column>
      </Row>

    </StyledContainer>
  )
 }

 export default NewProduct;