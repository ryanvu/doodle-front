import React from 'react';
import axios from 'axios';

const Test = () => {

    const handleClick = () => {
        axios.get('http://localhost:5000/test')
        .then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}

export default Test
