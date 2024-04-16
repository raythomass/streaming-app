import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './pages/Homepage.jsx';
import MoviePage from './components/MoviePage.jsx';
import './index.css';

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        index:true,
        element: <HomePage/>
      },
      {
        path: '/MoviePage/:id',
        element: <MoviePage/>
      },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
