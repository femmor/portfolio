import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='text-primary'>
              Emmanuel Egomson
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto' activeKey={location.pathname}>
              <Link
                to='/'
                className={`${
                  location.pathname === '/'
                    ? 'active nav-link'
                    : 'nav-link'
                }`}
              >
                Home
              </Link>
              <Link
                to='/about'
                className={`${
                  location.pathname === '/about'
                    ? 'active nav-link'
                    : 'nav-link'
                }`}
              >
                About
              </Link>
              <Link
                to='/projects'
                className={`${
                  location.pathname === '/projects'
                    ? 'active nav-link'
                    : 'nav-link'
                }`}
              >
                Projects
              </Link>
              <Link
                to='/contact'
                className={`${
                  location.pathname === '/contact'
                    ? 'active nav-link'
                    : 'nav-link'
                }`}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;