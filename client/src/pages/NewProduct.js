import React, {useState} from 'react'
import styled from "styled-components";
import {StyledContainer, StyledInputFormControl, HorizontalDiv, Spacer, Column, Row, TextRight, GenericButton} from '../styled'
import AddImageButton from '../components/nav/AddImageButton'

const MainRow = styled.div `
  display: flex;
  min-width: 100px;
`
const ImageRow = styled.div `
  min-width: 200px;
`

const NewProduct = () => {

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precio, setPrecio] = useState("");

  

  function addProduct(e) {
    e.preventDefault();
    var sendToDB = {
      nombre:           nombre,
      categoria:        categoria,
      descripcion:      descripcion,
      tipo:             tipo,
      precioMin:        precioMin,
      precio:           precio
    };
    console.log(sendToDB);
  };

  return (
    <form onSubmit={addProduct}>
      <StyledContainer>
        <Row>
          <Column size="2" paddingRight="5%">
            <MainRow>
              <StyledInputFormControl
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder= "Nombre del producto"
              ></StyledInputFormControl>
            </MainRow>
            <Row>
              <Column size="1">
                <TextRight>
                  Categoría
                </TextRight>

              </Column>
              <Column size="1">
                <StyledInputFormControl
                  type="text"
                  value={categoria}
                  onChange={e => setCategoria(e.target.value)}
                  placeholder= "categoría"
                ></StyledInputFormControl>
              </Column>
            </Row>
            <Row>
              <StyledInputFormControl
                type="text"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
                placeholder= "Descripcion"
              ></StyledInputFormControl>
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
                  value={tipo}
                  onChange={e => setTipo(e.target.value)}
                  placeholder= "tipo"
                ></StyledInputFormControl>
              </Column>
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
                  value={precioMin}
                  onChange={e => setPrecioMin(e.target.value)}
                  placeholder= "min"
                ></StyledInputFormControl>
              </Column>
            </Row>
            <Row>
              <Column size="1">
                <TextRight>
                  Precio
                </TextRight>
              </Column>
              <Column size="1">
                <StyledInputFormControl
                  type="text"
                  value={precio}
                  onChange={e => setPrecio(e.target.value)}
                  placeholder= "tipo"
                ></StyledInputFormControl>
              </Column>
            </Row>
            <Row>
              <Spacer></Spacer>
              <GenericButton onClick={addProduct}>
                Crear producto
              </GenericButton>
            </Row>
          </Column>

          <Column size="1">
              <ImageRow>
                <Spacer></Spacer>
                <AddImageButton name="Prueba" image="https://img.pngio.com/free-png-plus-sign-transparent-plus-signpng-images-pluspng-plus-sign-transparent-background-512_512.png"></AddImageButton>
                <Spacer></Spacer>
              </ImageRow>
          </Column>
        </Row>
      </StyledContainer>
    </form>
  )
 }

 export default NewProduct;