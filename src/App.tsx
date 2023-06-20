import { FC, useContext, useEffect } from 'react';
import { Footer, Header } from './components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Store } from './Store';

const App = () => {
  const { state, dispatch } = useContext(Store);
  const { mode } = state;

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const modeSwitchHandler = () => {
    dispatch({ type: 'SET_MODE' });
  };

  return (
    <div className='d-flex flex-column vh-100'>
      <Header modeSwitchHandler={modeSwitchHandler} />
      <main className='my-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
export default App;
