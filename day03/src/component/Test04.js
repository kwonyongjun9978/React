import React, { useState } from 'react';
import Animal from './Animal';
import Display from './Display';

const Test04 = () => {
    const [name, setName] = useState('호랑이')
    
    const onInputName = (e) => {

        console.log(e);
        console.log(e.target);

        const {value} = e.target
        setName(value)
    }

    return (
        <div>
            <Animal name={name} onInputName={onInputName}/>
            <hr/>
            <Display name={name} />
        </div>
    );
};

export default Test04;