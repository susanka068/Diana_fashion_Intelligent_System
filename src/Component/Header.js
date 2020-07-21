import React from 'react'
import {Navbar , Nav , FormControl , Button , Form , Image } from 'react-bootstrap'
import Logo from '../Img/logos/favicon-32x32.png'
import {Link} from 'react-router-dom'
export default function HomePage() {
    return (
<Navbar bg="light" expand="lg">
  <Image href="/" src={Logo} thumbnail />
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
      <Link to='/products'><Nav.Link href="/products">Explore Products</Nav.Link></Link>
      <Nav.Link href="#">Extract</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
