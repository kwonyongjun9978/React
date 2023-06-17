import React, { useState } from 'react';
import '../css/Test06.css';
const Test06 = () => {
    const [data, setData] = useState([
        { seq: 1, name: '권용준', age: 30, addr: '익산', done: true},
        { seq: 2, name: '손흥민', age: 32, addr: '런던', done: true},
        { seq: 3, name: '음바페', age: 26, addr: '파리', done: true},
        { seq: 4, name: '메시', age: 37, addr: '파리', done: true},
        { seq: 5, name: '네이마르', age: 32, addr: '파리', done: true}
    ])

    return (
        <div>
            <table className='list'>
                <caption>신상명세서</caption>
                <colgroup>
                    <col className='seq'></col>
                    <col className='name'></col>
                    <col className='age'></col>
                    <col className='addr'></col>
                    <col className='done'></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의 여부</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((item, index) => {
                        return(<tr key={item.seq}>
                            <td>
                                {item.seq}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.age}
                            </td>
                            <td>
                                {item.addr}
                            </td>
                            <td>
                                { item.done ? '동의' : '비동의'}
                            </td>
                        </tr>)
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Test06;