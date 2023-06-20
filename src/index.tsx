import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './bootstrap.min.css';
import './index.css';
import { About, Contact, Home, Projects } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
