import React from 'react';

const CatItem = ({item}) => {
    const {id, img, title} = item //비구조할당
    return (
        <li>
            <a href='#'>
                <div><img src={ img } /></div>
                <h3>{title}</h3>
            </a>
        </li>
    );
};

export default CatItem;