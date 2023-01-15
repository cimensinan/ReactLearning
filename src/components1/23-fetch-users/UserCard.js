import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = (props) => {
    // users şeklinde oluşturduğumuz mockapi'daki datalarımızı burada propsun içine destructuring yaparak yerleştiriyoruz.
    const {id, firstName, lastName, email, avatar} = props

  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{firstName}{lastName}</Card.Title>
        <Card.Subtitle>
          {email}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default UserCard