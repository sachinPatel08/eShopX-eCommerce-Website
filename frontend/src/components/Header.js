import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand
              style={{ color: '#fff', fontSize: '22px', fontWeight: '700' }}
            >
              <Image src='/Logo.png' style={{ height: '33px' }} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link
                  style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}
                >
                  <i
                    class='fa-solid fa-cart-shopping'
                    style={{ marginRight: '10px' }}
                  ></i>
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link
                  style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}
                >
                  <i
                    class='fa-solid fa-user'
                    style={{ marginRight: '10px' }}
                  ></i>
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
