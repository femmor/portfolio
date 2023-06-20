import { BsGithub, BsLinkedin } from '../utils/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='container my-3'>
      <p className='d-flex flex-row justify-content-center gap-2'>
        <Link to='https://github.com/femmor' target='_blank'>
          <BsGithub size={24} color='#000' />
        </Link>
        <Link
          to='https://www.linkedin.com/in/emmanuel-egomson-9b344319b'
          target='_blank'
        >
          <BsLinkedin size={24} color='#2781db' />
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
