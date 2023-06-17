import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css';


const Test07Main = () => {
    const [count, setCount] = useState(1)
    const [data, setData] = useState({
        name: '',
        age: '',
        addr: '',
        phone: ''
    })
    const {name, age, addr, phone} = data

    const onInput = (e) => {
        const {name, value} = e.target

        setData({
            ...data, //1.객체를 복사 2.원하는 값(name, id, pwd)만 수정
                     //복사하지 않으면 전에 있던 값이 초기화된다.
            [name]: value
        })
    }

    const onPrev = () => {
        setCount(count-1)
    }
    const onNext = () => {
        setCount(count+1)
    }
    
    return (
        <div className='wrap'>
            {
                count === 1 && <Test07Input data={data} onInput={onInput} onNext={onNext}/>
            }
            {
                count === 2 && <Test07Print {...data} onPrev={onPrev} onNext={onNext}/>
            }
            {
                count ===3 && <Test07Output name={name}/>
            } 
        </div>
    );
};

export default Test07Main;