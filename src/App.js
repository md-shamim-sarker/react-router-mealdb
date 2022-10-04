import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {path: "/", element: <h2>Home Page</h2>},
    {path: "/home", element: <h2>Home Page</h2>},
    {path: "/about", element: <h2>About Page</h2>},
    {path: "/service", element: <h2>Service Page</h2>},
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;