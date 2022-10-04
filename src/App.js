import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Credit from './components/Credit/Credit';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Main from './layout/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {path: "/", element: <Home></Home>},
        {path: "/home", element: <Home></Home>},
        {path: "/credit", element: <Credit></Credit>},
        {path: "/about", element: <About></About>},
        {path: "/profile", element: <Profile></Profile>}
      ]
    },
    {path: "/*", element: <Errorpage></Errorpage>}
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;