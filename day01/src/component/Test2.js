import React from 'react';

const Test2 = () => {
    //함수 영역 - 조건문, 제어문..등 써도 된다
    let title = '신상명세서'
    const name = '권용준'
    const age = '18'
    const addr = '익산'

    const css1 = {
        color: 'red',
        backgroundColor: 'yellow',
        fontSize: '30pt',
        padding: 20,
        margin: 10,
        border: '3px solid #000'
    }

    const css2 = {
        width: 400,
        backgroundColor: 'hotpink',
        fontSize: 20,
        padding: 15,
        margin: 30
    }

    return (
        <>
            <h2>JSX 영역</h2>
            <h2 style={css1}>{title}</h2>
            <ul>
                <li style={css2}>이름 : {name}</li>
                <li style={{backgroundColor: 'greenyellow', padding: 15, margin: 'auto'}}>
                    나이 : {age}살 {age>=19 ? '성인' : '청소년'}
                </li>
                <li>주소 : {addr}</li>
            </ul>
        </>
    );
};

export default Test2;