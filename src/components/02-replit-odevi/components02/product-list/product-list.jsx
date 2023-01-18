import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../product-card/product-card'
import data from "./data.json"

const ProductList = () => {
  return (
    <Container>
        <Row className='g-5 mt-5'>
            {data.map((product) => (
            <Col key={product.id} md={6} lg={4} xl={3}>
                <ProductCard {...product}/>
            </Col>
            ))}
        </Row>
    </Container>
  )
}

export default ProductList