import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

function Header() {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>THIS iS Header: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increment</button>
        </div>
    );
};

export default Header;