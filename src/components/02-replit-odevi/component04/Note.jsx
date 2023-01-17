import React from 'react'
import { Card, Col} from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'

const Note = (props) => {

  return (
    <>
    <Col md={4} className="mb-5">
        <Card>
            <Card.Body>
                <Card.Title className='p-2'></Card.Title>
                <Card.Footer className='d-flex gap-4 p-3'>
                    <input type="checkbox"/>
                    <AiFillDelete style={{color: "red", fontSize: "1.3rem"}}/>
                </Card.Footer>
            </Card.Body>
        </Card>
    </Col>
    </>
  )
}

export default Note