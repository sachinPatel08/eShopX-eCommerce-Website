import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand
            href='/'
            style={{ color: '#fff', fontSize: '22px', fontWeight: '700' }}
          >
            eShopX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='/cart'
                style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}
              >
                <i
                  class='fa-solid fa-cart-shopping'
                  style={{ marginRight: '10px' }}
                ></i>
                Cart
              </Nav.Link>
              <Nav.Link
                href='/login'
                style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}
              >
                <i class='fa-solid fa-user' style={{ marginRight: '10px' }}></i>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
