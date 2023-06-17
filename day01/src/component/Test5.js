import React from 'react';
import Test5Sub from './Test5Sub';

const Test5 = () => {
    return (
        <div>
            <Test5Sub name='권용준'
                      age='19'
                      addr='익산'
                      tel='010-2753-9978'
                      color='tomato'
                      bgcolor='pink'
                      done={true}/>
            <hr/>
            <Test5Sub name='코난' addr='부산' color='skyblue' bgcolor='hotpink' /> 

        </div>
    );
};

export default Test5;