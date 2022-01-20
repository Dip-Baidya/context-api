import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const allProducts = [
    { name: 'Lenovo', category: 'laptop' }, { name: 'Dell', category: 'laptop' }, { name: 'HP', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' }, { name: 'Apple', category: 'mobile' }, { name: 'Nokia', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikon', category: 'camera' }, { name: 'Sony', category: 'camera' }]


const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <h1>Select your category: {category}</h1>
            {
                products.map(pd => <CategoriesDetail product={pd}></CategoriesDetail>)
            }
        </div>
    );
};

export default Categories;