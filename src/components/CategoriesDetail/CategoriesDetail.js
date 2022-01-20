import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetail = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h2>This is a category Detail: {category}</h2>
        </div>
    );
};

export default CategoriesDetail;