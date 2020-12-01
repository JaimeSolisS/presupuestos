import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {StyledContainer, ProductLabel, Spacer, Column, Row, TextRight, StyledInputFormControl, GenericButton} from '../styled'
import {ShoppingCartOutlined} from "@ant-design/icons"
import {getProductById} from '../functions/product'
import {getPriceQuantityByProductId} from '../functions/productXquantity'
import {getPriceAreaByProductId} from '../functions/productXarea'

  const ProductTitle = styled.h1 `
    font-weight: bold;
  `

  const DescriptionArea = styled.p `
    min-width: 100px;
  `
  const StyledLabel = styled.p `
    padding-top: 10px;
    padding-right: 20px;
    min-width: 100px;
  `
  const numberFormat = (value) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(value);

  const Product = ({ match }) => {
    const [product, setProduct] = useState({});
    const [priceQty, setPriceQty] = useState({});
    const [priceArea, setPriceArea] = useState({});
    const [largo = 0, setLargo] = useState({});
    const [ancho = 0, setAncho] = useState({});
    const [cantidad = 0, setCantidad] = useState("")

    const { id } = match.params;

    useEffect(() => {
      loadSingleProduct();
      loadPrice();
      loadPriceByArea();
    }, [id]);

    const loadSingleProduct = () =>
    getProductById(id).then((res) => setProduct(res.data));

    const loadPrice = () =>
    getPriceQuantityByProductId(id).then((res) => setPriceQty(res.data));

    const loadPriceByArea = () =>
    getPriceAreaByProductId(id).then((res) => setPriceArea(res.data));

    var producto = {
      nombre: null,
      product_key: null,
      descripcion: null,
      precio: null,
      precioMin: null
    };

    producto.nombre = product.name;
    producto.product_key = product.id;
    producto.descripcion = product.description;
    if (priceQty === null) {
      producto.precio = priceArea.priceArea;
      producto.precioMin = priceArea.minPrice;
    } else if (priceArea === null){
      producto.precio = priceQty.price;
    }
    

  var imageLink = product.image;
  var area = 0;
  var ppimp = 0;
  var total = 0;

  function addToCart(e) {
    e.preventDefault();
    var sendToDB = {
      productName:   producto.nombre,
      product_key:   producto.product_key,
      quantity:      cantidad,
      price:         producto.precio * cantidad
    }
    console.log(sendToDB);
  }

  function precioXcantidad () {
    var temp = producto.precio * cantidad;
    return numberFormat(temp);
  }

  function getArea () {
    area = largo*ancho;
    return area;
  }

  function precioXimpresion () {
    ppimp = area * producto.precio;
    return numberFormat(ppimp);
  }

  function precioXarea () {
    total = ppimp * cantidad;

    if (total>producto.precioMin){
      return numberFormat(total);
    } else {
      return numberFormat(producto.precioMin);
    }
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
          {priceArea === null && (
            <>
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
                        min={0}
                    ></StyledInputFormControl>
                </Column>
              </Row>
              <Row>
                  <Spacer></Spacer>
                  <StyledLabel
                    thousandSeparator={true}
                    prefix={'$'}
                  >
                    {precioXcantidad()}</StyledLabel>
                  <GenericButton
                    onClick={addToCart}
                    disabled={cantidad<1}
                  >
                    Agregar a carrito <ShoppingCartOutlined/>
                  </GenericButton>
              </Row>
            </>
          )}

          {priceQty === null && (
            <>
              <Row>
                <Column size="1">
                  <TextRight>
                      <ProductLabel>
                        Largo en cm: 
                      </ProductLabel>
                  </TextRight>
                </Column>
                <Column size="1">
                  <StyledInputFormControl
                      type="number"
                      value={largo}
                      onChange={e => setLargo(e.target.value)}
                      min={0}
                      style={{minWidth: "100px"}}
                  ></StyledInputFormControl>
                </Column>
                <Column size="1">
                  <TextRight>
                    <ProductLabel>
                        Ancho en cm: 
                    </ProductLabel>
                  </TextRight>
                </Column>
                <Column size="1">
                    <StyledInputFormControl
                        type="number"
                        value={ancho}
                        onChange={e => setAncho(e.target.value)}
                        min={0}
                        style={{minWidth: "100px"}}
                    ></StyledInputFormControl>
                </Column>
              </Row>
              <Row>
                <Column size="1">
                  <TextRight>
                    <ProductLabel>
                        Área: 
                    </ProductLabel>
                  </TextRight>
                </Column>
                <Column size="1">
                  <StyledLabel>
                    {(largo > 0) && (ancho > 0) ? getArea() : 0}&nbsp;cm<sup>2</sup>
                  </StyledLabel>
                </Column>
                <Column size="1">
                    <TextRight>
                        <ProductLabel>
                            Precio por impresión: 
                        </ProductLabel>
                    </TextRight>
                </Column>
                <Column size="1">
                  <StyledLabel
                    thousandSeparator={true}
                    prefix={'$'}
                  >
                    {area > 0 ? precioXimpresion() : numberFormat(0)}
                  </StyledLabel>
                </Column>
              </Row>
              <Row>
                <Column size="2"></Column>
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
                      min={0}
                  ></StyledInputFormControl>
                </Column>
              </Row>
              <Row>
                <Spacer></Spacer>
                <StyledLabel
                  thousandSeparator={true}
                  prefix={'$'}
                >
                  {precioXarea()}</StyledLabel>
                <GenericButton
                  onClick={addToCart}
                  disabled={cantidad<1}
                >
                  Agregar a carrito <ShoppingCartOutlined/>
                </GenericButton>
              </Row>
            </>
          )}


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
  