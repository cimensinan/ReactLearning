import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NoteForm from './NoteForm'
import Notes from './Notes'

const ToDoApp = () => {

    const [note, setNote] = useState([])


    const loadData = async () => {
        try {
          const resp = await axios.get('https://63c2f147e3abfa59bdb61d76.mockapi.io/api/v1/todoapp');
          setNote(resp.data)
        } catch (err) {
          console.error(err);
        }
      }

    useEffect(() => {
      loadData()
    }, [])

    const createToDo = () => { }
    const deleteToDo = () => { }
    

  return (
    <Container>
        <Row>
            <Col md={3}>
                <NoteForm/>
            </Col>
            <Col md={9}>
                <Notes {...note}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ToDoApp