import React from 'react';
import {useLoaderData} from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import './FoodItems.css';

const FoodItems = () => {
    const foodItems = useLoaderData().meals;
    return (
        <div className='foodItems'>
            {
                foodItems.map(foodItem => <FoodItem
                    key={foodItem.idMeal}
                    foodItem={foodItem}
                ></FoodItem>)
            }
        </div>
    );
};

export default FoodItems;