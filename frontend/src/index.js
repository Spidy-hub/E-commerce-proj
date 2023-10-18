import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/404';
import { store  } from './Redux/index';
import { Provider } from 'react-redux';
import NewProducts from './pages/NewProducts'

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="newproducts" element={<NewProducts />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  
);

