import React from 'react'
import { Link } from 'react-router-dom';
import {StyledContainer, Spacer, HorizontalDiv, Row, Column} from '../styled'

const NoRoute = () => {
    return (
        <StyledContainer>
            <HorizontalDiv style={{display:"flex"}}>
                <Spacer></Spacer>
                <Column>
                    <Row>
                        <h1>404 - ¡Ruta no encontrada!</h1>
                    </Row>
                    <Row>
                        <Link to="/">
                        Home
                        </Link>
                    </Row>
               </Column>
               <Spacer></Spacer>
            </HorizontalDiv>
        </StyledContainer>
    )
}

export default NoRoute;