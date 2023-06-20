import { FC } from 'react';
import { Footer, Header } from './components';

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <Header />
      <main>
        <h1>Emmanuel Egomson</h1>
      </main>
      <Footer />
    </div>
  );
};
export default App;
