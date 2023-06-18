import React from 'react';

const Cat = (props) => {
    //비구조할당
    const {name} = props
    
    return (
        <div>
            <h1>나는 {name} 컴포넌트</h1>
        </div>
    );
};

export default Cat;
