import React from 'react';

const Output = (props) => {
    const {name, fruit} = props
    return (
        <div>
            <h1>내 이름은 {name}이고 좋아하는 과일은 {fruit} 입니다.</h1>
        </div>
    );
};

export default Output;