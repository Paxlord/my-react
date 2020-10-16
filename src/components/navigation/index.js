import React from 'react';
import {
  Container, Navbar, Nav, FormControl, Button, Form,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        React Bootstrap
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Test1</Nav.Link>
        <Nav.Link href="#link">Test2</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
);

export default Navigation;
