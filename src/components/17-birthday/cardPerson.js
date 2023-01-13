import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa"

const CardPerson = ({image, name, age, id, deletePerson}) => {
    // deletePerson'u da burada prop değeri olarak ekliyoruz.
  return (
    <Card className='mb-4 position-relative'>
        <Row>
            <Col md={2}>
                <Card.Img src={require(`./images/${image}`)}/>
            </Col>
            <Col md={10}>
                <Card.Body>
                    <Card.Title className='fs-1'>{name}</Card.Title>
                    {/* Bootstrap'in h1 adında bir class'ı var ancak burada Bootstrap'in card yapısını kullanırken otomatik olarak gelen bir h5 class'ı var. Bunu h1 class'ı vererek ezmek mümkün değil çünkü h5 class bootstrap'te hedefe daha yakın. Bu nedenle farklı bir class kullanım yoluna gittik font'u büyüttük. */}
                    <Card.Subtitle>{age}</Card.Subtitle>
                </Card.Body>
            </Col>
        </Row>
        <span className='position-absolute end-0 bottom-0 me-2 mb-2 text-danger' onClick={() => deletePerson(id)}>
            {/* deletePerson burada silinecek bir id değeri beklediği için parametre olarak id ifadesini ekliyoruz. */}
            <FaTrash/>
        </span>
    </Card>
  )
}

export default CardPerson