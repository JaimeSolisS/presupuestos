import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {StyledContainer, ProductLabel, Spacer, Column, Row, TextRight, StyledInputFormControl, GenericButton} from '../styled'
import AddImageButton from '../components/nav/AddImageButton'
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
  const PriceLabel = styled.p `
    padding-top: 10px;
    padding-right: 20px;

  `
  const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'MXN'
  }).format(value);

  const Product = ({ match }) => {
    const [product, setProduct] = useState({});
    const [priceQty, setpriceQty] = useState({});
    const [priceArea, setpriceArea] = useState({});

    const { id } = match.params;

    useEffect(() => {
      loadSingleProduct();
      loadPrice();
      loadPriceByArea();
    }, [id]);

    const loadSingleProduct = () =>
    getProductById(id).then((res) => setProduct(res.data));

    const loadPrice = () =>
    getPriceQuantityByProductId(id).then((res) => setpriceQty(res.data));

    const loadPriceByArea = () =>
    getPriceAreaByProductId(id).then((res) => setpriceArea(res.data));

  const [cantidad = 0, setCantidad] = useState("")
  var producto = {
    nombre: null,
    product_key: null,
    descripcion: null,
    precio: null
  };

  producto.nombre = product.name;
  producto.product_key = product.id;
  producto.descripcion = product.description;
  if (priceQty === null) {
    producto.precio = priceArea.price
  } else if (priceArea === null){
    producto.precio = priceQty.price
  }

  console.log("producto.precio", producto.precio);

  var imageLink = product.image;

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
                    min={0}
                ></StyledInputFormControl>
            </Column>
          </Row>
          <Row>
              <Spacer></Spacer>
              <PriceLabel
                thousandSeparator={true}
                prefix={'$'}
              >
                {precioXcantidad()}</PriceLabel>
              <GenericButton 
                onClick={addToCart}
                disabled={cantidad<1}
              >Agregar a carrito <ShoppingCartOutlined/></GenericButton>
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
  