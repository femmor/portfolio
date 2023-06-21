import { useContext } from 'react';
import { BsGithub, BsLinkedin } from '../utils/icons';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

const Footer = () => {
  const { state } = useContext(Store);
  const { mode } = state;
  const year = new Date().getFullYear();

  return (
    <footer className='container my-3'>
      <p className='d-flex flex-row justify-content-center gap-2 my-4'>
        <Link to='https://github.com/femmor' target='_blank'>
          <BsGithub
            size={24}
            color={mode === 'light' ? '#444' : '#fff'}
          />
        </Link>
        <Link
          to='https://www.linkedin.com/in/emmanuel-egomson-9b344319b'
          target='_blank'
        >
          <BsLinkedin
            size={24}
            color={mode === 'light' ? '#2781db' : '#fff'}
          />
        </Link>
      </p>
      <hr />
      <p className='text-center'>
        &copy; {year} Created by{' '}
        <Link to='/' className='nav-link'>
          Emmanuel Egomson
        </Link>
      </p>
    </footer>
  );
};
export default Footer;
