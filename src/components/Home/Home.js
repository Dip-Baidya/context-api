import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style = {{border: '1px solid purple'}}>
            <h1 >This Is Home: {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;