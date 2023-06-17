import React, { useState } from 'react';
import dataList from './CatData';
import CatList from './CatList';
import '../css/reset.css';
import '../css/style.css';

const Cat = () => {
    const [data, setData] = useState(dataList)

    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>권용준</h2>
                    <p>용준이들</p>
                    <CatList data={data}/>
                </div>
            </section>
        </>
    );
};

export default Cat;