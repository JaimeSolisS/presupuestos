import React, {useState} from 'react'
import styled from "styled-components";
import {StyledContainer, StyledInputFormControl, ProductLabel, Spacer, Column, Row, TextRight, GenericButton, GenericSelect} from '../../../styled'
import AddImageButton from '../../../components/nav/AddImageButton'
import AdminNav from '../../../components/nav/AdminNav'
import { useSelector } from "react-redux";

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
  const [precioCm, setPrecioCm] = useState("");
  const [picture, setPicture] = useState("");
  const [showPic, setShowPicture] = useState("");

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  function addProduct(e) {
    e.preventDefault();
    var sendToDB = {
      nombre:           nombre,
      categoria:        categoria,
      descripcion:      descripcion,
      tipo:             tipo,
      precioMin:        (tipo === "unitario" ? null : precioMin),
      precio:           (tipo === "area" ? null : precio),
      precioCm:         (tipo === "unitario" ? null : precioCm),
      picture:          picture
    };
    console.log(sendToDB);
  };

  const handleUpdatePicture = e => {
    e.preventDefault();
    setPicture(e.target.value);
    setShowPicture(picture);
  }

  const ProductImage = () => (
    <img
    src={showPic}
    />
  );
  const ImagePlaceholder = () => (
    <img
    src={"https://wiki.tripwireinteractive.com/images/4/47/Placeholder.png"}
    />
  );

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className= 'col-md-2'>
          <AdminNav/>
        </div>
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
                  <ProductLabel>
                    Categoría
                  </ProductLabel>
                </TextRight>
              </Column>
              <Column size="1">
                <GenericSelect onChange={e => setCategoria(e.target.value)}>
                  <option value=""> --Seleccione categoría--</option>
                  <option value="ropa">Ropa</option>
                  <option value="serigrafia">Serigrafía</option>
                  <option value="impresiones">Impresiones</option>
                  <option value="papeleria">Papelería</option>
                  <option value="otros">Otros</option>
                </GenericSelect>
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
              <Column size="2">
                <TextRight>
                  <ProductLabel>
                    URL de imagen
                  </ProductLabel>
                </TextRight>
              </Column>
              <Column size="1">
                <StyledInputFormControl
                  type="text"
                  value={picture}
                  onChange={picture.length > 10 ? e => handleUpdatePicture(e) : e => setPicture(e.target.value)}
                  placeholder= "url"
                ></StyledInputFormControl>
              </Column>
              <Column size="1">
                <GenericButton
                  disabled={picture.length<10}
                  onClick={e => setShowPicture(picture)}
                  style={{marginLeft:"15px", float: "right"}}
                >
                  Previsualizar imagen
                </GenericButton>
              </Column>
            </Row>
            <Row>
              <Column size="1">
                <TextRight>
                  <ProductLabel>
                    Tipo
                  </ProductLabel>
                </TextRight>
              </Column>
              <Column size="1">
                <GenericSelect onChange={e => setTipo(e.target.value)}>
                  <option value="" hidden> --Seleccione tipo--</option>
                  <option value="unitario">Unitario</option>
                  <option value="area">Área</option>
                </GenericSelect>
              </Column>
            </Row>
            {tipo === "unitario" && (
              <Row>
                <Column size="1">
                  <TextRight>
                    <ProductLabel>
                      Precio
                    </ProductLabel>
                  </TextRight>
                </Column>
                <Column size="1">
                  <StyledInputFormControl
                    type="text"
                    value={precio}
                    onChange={e => setPrecio(e.target.value)}
                    placeholder= "precio"
                  ></StyledInputFormControl>
                </Column>
              </Row>
            )}
            {tipo === "area" && (
              <div>
                <Row>
                  <Column size="1">
                    <TextRight>
                      <ProductLabel>
                        Precio mínimo
                      </ProductLabel>
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
                      <ProductLabel>
                        Precio por cm<sup>2</sup>
                      </ProductLabel>
                    </TextRight>
                  </Column>
                  <Column size="1">
                    <StyledInputFormControl
                      type="text"
                      value={precioCm}
                      onChange={e => setPrecioCm(e.target.value)}
                      placeholder= "precio"
                    ></StyledInputFormControl>
                  </Column>
                </Row>
              </div>
            )}
            <Row>
              <Spacer></Spacer>
              <GenericButton
                onClick={addProduct}
                disabled={
                  nombre.length < 1 ||
                  categoria === "" ||
                  descripcion.length < 1 ||
                  (tipo === "unitario" && precio <= 0) ||
                  (tipo === "area" && precioCm <= 0) ||
                  tipo === "" ||
                  picture.length < 10
                }
              >
                Crear producto
              </GenericButton>
            </Row>
          </Column>

          <Column size="1">
              <ImageRow>
                <Spacer></Spacer>
                {showPic && (
                  <ProductImage></ProductImage>
                )}
                {!showPic && (
                  <ImagePlaceholder></ImagePlaceholder>
                )}
                <Spacer></Spacer>
              </ImageRow>
          </Column>
        </Row>
      </StyledContainer>
    </form>
      </div>
    </div>
  )
 }

 export default NewProduct;