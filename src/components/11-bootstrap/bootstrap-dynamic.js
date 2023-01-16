import React from 'react'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const BootstrapDynamic = () => {
  // Her bir componenti ayrı ayrı import etmek yerine tek bir süslü parantez içinde kullandıklarımızın hepsini import edebiliriz. İmport ederken sondaki bir harfi silip geri yazarken çıkan emmet özelliği ile tab'a basarak otomatik import'u yapabiliriz.
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootstrapDynamic