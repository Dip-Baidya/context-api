import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

function Header() {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>THIS iS Header: {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>,
            <button onClick={() => setCategory('Mobile')}>Mobile</button>,
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;