import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FoodItems from './components/FoodItems/FoodItems';
import Credit from './components/Credit/Credit';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Main from './layout/Main';
import Recipe from './components/Recipe/Recipe';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          },
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
          },
          element: <Home></Home>
        },

        {
          path: "/category/:strCategory",
          loader: async ({params}) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`);
          },
          element: <FoodItems></FoodItems>
        },
        {
          path: "/foodItem/:idMeal",
          loader: async ({params}) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);
          },
          element: <Recipe></Recipe>
        },
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