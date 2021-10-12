import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import Cardss from '../../components/cardss/Cardss'
import Carouselss from '../../components/carouselss/Carouselss'
import {Navbar2, Navbarss} from '../../components/navbar'

function Home() {
    return (
        <>
<Container fluid>
    <Row>
        <Col>
        <Navbarss/>

        </Col>
    </Row>
    <br/>
<Row>
<Col>
<Carouselss/>
</Col>
</Row>
<br/>
<Row>
<Col>
<Cardss/>
</Col>
<Col>
<Cardss/>
</Col>
<Col>
<Cardss/>
</Col>
<Col>
<Cardss/>
</Col>
</Row>
</Container>
        </>
    )
}

export default Home
