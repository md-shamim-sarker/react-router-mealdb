import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import './Home.css';

const Home = () => {
    const categories = useLoaderData().categories;
    return (
        <div className='home'>
            <Banner></Banner>
            <div className='categories'>
                {
                    categories.map(category => <Category
                        key={category.idCategory}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Home;