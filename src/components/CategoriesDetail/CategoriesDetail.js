import React from 'react';


const CategoriesDetail = (props) => {
    const { name } = props.product
    return (
        <div>
            <h2>This is a category Detail</h2>
            <h4>Selected Product: {name}</h4>
        </div>
    );
};

export default CategoriesDetail;