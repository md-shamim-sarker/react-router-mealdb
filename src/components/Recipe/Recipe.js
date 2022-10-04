import React from 'react';
import {useLoaderData} from 'react-router-dom';
import './Recipe.css';

const Recipe = () => {
    const recipe = useLoaderData().meals[0];
    const {strMeal, strArea, strInstructions, strMealThumb, strYoutube} = recipe;

    return (
        <div className='recipe'>
            <img src={strMealThumb} alt="recipe_image" />
            <h3>Name: {strMeal}</h3>
            <h4>Area: {strArea}</h4>
            <p><strong>Details:</strong> {strInstructions}</p>
            <a href={`${strYoutube}`}>See on Youtube</a>
        </div>
    );
};

export default Recipe;