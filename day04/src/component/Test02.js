import React, { useState } from 'react';
import Test02sub from './Test02sub';

const Test02 = () => {
    const [isShow, setIsShow] = useState(false)

    const onToggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <button onClick={ onToggle }>{isShow ? '숨기기' : '보이기'}</button>
            <hr/>
            {
                isShow && <Test02sub/>
            }
        </div>
    );
};

export default Test02;