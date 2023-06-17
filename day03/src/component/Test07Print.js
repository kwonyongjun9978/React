import React from 'react';

const Test07Print = ({name, age, addr, phone, onPrev, onNext}) => {
    return (
        <>
            <ul>
                <li>이름 : {name} </li>
                <li>나이 : {age} </li>
                <li>주소 : {addr} </li>
                <li>핸드폰 : {phone} </li>
            </ul>
            <p>
                <button onClick={onPrev}>이전</button>
                <button onClick={onNext}>다음</button>
            </p>
        </>
    );
};

export default Test07Print;