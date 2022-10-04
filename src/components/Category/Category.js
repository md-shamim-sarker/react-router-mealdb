import React from 'react';
import {Link} from 'react-router-dom';
import './Category.css';

const Category = ({category}) => {
    const {idCategory, strCategory, strCategoryThumb} = category;
    return (
        <div className='category'>
            <img src={strCategoryThumb} alt="category_img" />
            <h2>{strCategory}</h2>
            <Link to={idCategory}><button>See More</button></Link>
        </div>
    );
};

export default Category;