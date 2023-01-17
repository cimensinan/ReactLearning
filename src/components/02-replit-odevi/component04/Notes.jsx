import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Note from './Note'

const Notes = (props) => {
  return (
    <Container className='mt-5'>
        <Container>
            <Row>
                <Note/>
            </Row>
        </Container>
    </Container>

  )
}

export default Notes