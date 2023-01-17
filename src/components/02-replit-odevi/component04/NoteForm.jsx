import React, {useState } from 'react'
import { Button, Container, Form, } from 'react-bootstrap'

const NoteForm = ({createNote}) => {

    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

  return (
    <Container className='mt-5'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={handleChange}/>
            </Form.Group>
        </Form>
        <Button variant='info' onClick={(e) => createNote(e.target.value)}>Create Note</Button>
    </Container>
  )
}

export default NoteForm