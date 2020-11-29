import React, {useState} from 'react'
import styled from "styled-components";
import {StyledContainer, HorizontalDiv, Spacer, Column, Row, TextRight, StyledInputFormControl, GenericButton} from '../styled'
import AddImageButton from '../components/nav/AddImageButton'

  const ProductTitle = styled.h1 `
    font-weight: bold;
  `

  const ProductLabel = styled.p `
    font-weight: bold;
    margin-bottom: 0px;

  `
  const DescriptionArea = styled.p `
    min-width: 100px;
  `
  const PriceLabel = styled.p `
    padding-top: 10px;
    padding-right: 20px;

  `


const Product = () => {

  const [cantidad, setCantidad] = useState("")
  var producto = {
    nombre: "NAME",
    product_key: "1234",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    precio: "PRICE"
  };

  var imageLink = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png";

  function addToCart(e) {
    e.preventDefault();
    var sendToDB = {
      product_key: producto.product_key,
      quantity: cantidad
    }
    console.log(sendToDB);
  }

  const ProductImage = () => (
    <img
    src={imageLink}
    // style={{height: 400, width: 250}}
    />
  );

  return (
    <StyledContainer>
      <Row>
        <Column size="2" paddingRight="5%">
          <Row>
            <ProductTitle>{producto.nombre}</ProductTitle>
          </Row>
          <Row>
                <ProductLabel>Descripción:</ProductLabel>
          </Row>
          <Row>
            <DescriptionArea>{producto.descripcion}</DescriptionArea>
          </Row>
          <Row>
            <Column size="1"></Column>
            <Column size="1">
                <TextRight>
                    <ProductLabel>
                        Cantidad: 
                    </ProductLabel>
                </TextRight>
            </Column>
            <Column size="1">
                <StyledInputFormControl
                    type="number"
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
                ></StyledInputFormControl>
            </Column>
          </Row>
          <Row>
              <Spacer></Spacer>
                <PriceLabel>$12</PriceLabel>
              <GenericButton 
                onClick={addToCart}
              >Agregar a carrito</GenericButton>
          </Row>
        </Column>

        <Column size="1">
            <Row>
              <Spacer></Spacer>
              <ProductImage></ProductImage>
              <Spacer></Spacer>
            </Row>
        </Column>
      </Row>
    </StyledContainer>
  )
 }

 export default Product;