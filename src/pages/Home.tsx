import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';

import lightImg from '../images/lightImg.jpeg';
import darkImg from '../images/darkImg.jpeg';

const Home = () => {
  const { state } = useContext(Store);
  const { mode } = state;

  return (
    <div className='small-container my-5'>
      <Row>
        <Col>
          {mode === 'light' ? (
            <img src={lightImg} alt='light' className='profile-img' />
          ) : (
            <img
              src={darkImg}
              alt='dark'
              className='profile-img-dark'
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <h1 className='title my-3'>
            Hi, I'm <span className='text-success'>Emmanuel</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <p className='desc my-2'>
            I'm a front-end developer. I have over 6 years experience
            as a UI/Frontend developer based in the Dallas area. I
            have helped businesses and charities with my skill sets
            and ability to learn programming languages and frameworks
            on the fly...
          </p>
        </Col>
      </Row>
      <div className='d-flex justify-content-center gap-2 my-4'>
        <Button type='button' variant='primary'>
          <Link to='/about' className='text-white'>
            More About Me
          </Link>
        </Button>
        <Button type='button' variant='outline-secondary'>
          <Link to='/contact' className='hire-me'>
            Hire Me
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Home;
