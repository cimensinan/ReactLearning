import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CardPerson from './cardPerson'
import data from "./people.json"

const Birthday = () => {

    const [people, setPeople] = useState(data);

    const deletePerson = (id) => {
      const arr = people.filter((item) => item.id !== id)
      setPeople(arr);
    }

  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>
        {
            people.map((item) => (
                <CardPerson key={item.id} {...item} deletePerson={deletePerson}/>
                // <CardPerson key={item.id} {...item} setPeople={setPeople}/>
            ))
        }
        <Button className='me-1' variant='danger' onClick={() => setPeople([])}>Remove All</Button>
        <Button className='me-1' variant='success' onClick={() => setPeople(data)}>Reload Data</Button>
        <Button className='me-1' variant='primary' onClick={() => setPeople([data[0]])}>Reload One Data</Button>
    </Container>
  )
}

export default Birthday