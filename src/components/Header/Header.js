import React from 'react';

function Header(props) {
    const { count, setCount } = props;
    return (
        <div>
            <h1>THIS iS Header: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;