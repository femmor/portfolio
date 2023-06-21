import { FC, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import { BsSun, TbMoonFilled } from '../utils/icons';
import { Store } from '../Store';

type HeaderProps = {
  modeSwitchHandler: () => void;
};

const Header: FC<HeaderProps> = ({ modeSwitchHandler }) => {
  const { state } = useContext(Store);
  const { mode } = state;

  const location = useLocation();

  return (
    <header>
      <Navbar expand='lg' variant={mode} bg={mode}>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand
              className={mode === 'light' ? 'text-primary' : ''}
            >
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
              {mode === 'light' ? (
                <span
                  className='sun nav-link'
                  onClick={modeSwitchHandler}
                >
                  <BsSun size={20} color='orange' />
                </span>
              ) : (
                <span
                  className='moon nav-link'
                  onClick={modeSwitchHandler}
                >
                  <TbMoonFilled size={20} color='yellow' />
                </span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
