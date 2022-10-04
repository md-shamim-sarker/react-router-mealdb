import React from 'react';
import {Link} from 'react-router-dom';
import './FoodItem.css';

const FoodItem = ({foodItem}) => {
    const {idMeal, strMeal, strMealThumb} = foodItem;
    return (
        <div className='foodItem'>
            <img src={strMealThumb} alt="item_image" />
            <h4>{strMeal}</h4>
            <Link to={`/foodItem/${idMeal}`}><button>Full Recipe</button></Link>
        </div>
    );
};

export default FoodItem;