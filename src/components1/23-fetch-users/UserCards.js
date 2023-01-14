import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const UserCards = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(() => {
            fetch("https://63c2f147e3abfa59bdb61d76.mockapi.io/api/v1/users")
            .then(resp => resp.json())
            .then(data => {
                setUsers(data);
                // setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        }, 1000)
    },[])

  return (
    <Container className='mt-5'>
        {loading && <Spinner animation="border" variant="primary"/>}
        <Row className='g-4'>
            {
                users.map((user) => 
                <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
                    <UserCard {...user}/>
                </Col>)
            }
            
        </Row>
    </Container>
  )
}

export default UserCards