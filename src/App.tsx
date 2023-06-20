import { FC } from 'react';
import { Header } from './components';

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <Header />
    </div>
  );
};
export default App;
