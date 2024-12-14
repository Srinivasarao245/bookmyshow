import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Movies from './Features/bokmyshow/Movies';
import Navbar2 from './Navbar2';
import AddMovie from './Features/bokmyshow/AddMovie';
import Events from './Features/Eventshows/Events';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Navbar2></Navbar2>
      },
      {
        path:'/Movies',
        element:<Movies></Movies>
      },
      {
        path:'/addmovies',
        element:<AddMovie></AddMovie>
      },
      {
        path:'/events',
        element:<Events></Events>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
