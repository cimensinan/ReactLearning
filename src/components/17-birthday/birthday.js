import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CardPerson from './cardPerson'
import data from "./people.json"

const Birthday = () => {

    const [people, setPeople] = useState(data)

  return (
    <Container>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>
        {
            people.map((item) => (
                <CardPerson key={item.id} {...item}/>
            ))
        }
    </Container>
  )
}

export default Birthday